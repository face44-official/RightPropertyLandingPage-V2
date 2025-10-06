#!/bin/bash

# Find unused assets in src/assets directory
# This script checks which files in src/assets are not referenced in the codebase
# Usage: ./find-unused-assets.sh [--delete]

set -e

DELETE_MODE=false
if [[ "$1" == "--delete" ]]; then
    DELETE_MODE=true
fi

ASSETS_DIR="src/assets"
SRC_DIR="src"
TEMP_FILE=$(mktemp)
USED_ASSETS_FILE=$(mktemp)

echo "🔍 Finding unused assets in $ASSETS_DIR..."
echo ""

# Get all asset files (excluding directories)
find "$ASSETS_DIR" -type f \( \
    -name "*.png" -o \
    -name "*.webp" -o \
    -name "*.jpg" -o \
    -name "*.jpeg" -o \
    -name "*.svg" -o \
    -name "*.webm" -o \
    -name "*.mp4" -o \
    -name "*.woff" -o \
    -name "*.woff2" \
\) | sort > "$TEMP_FILE"

echo "📁 Total asset files found: $(wc -l < "$TEMP_FILE")"
echo ""

# Find assets referenced via imports (from @/assets/ or from './assets/' or from '../assets/')
grep -r --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" --include="*.css" \
    -E "from ['\"][@./]*assets/" "$SRC_DIR" | \
    sed -E "s/.*from ['\"][@./]*assets\/([^'\"]+)['\"].*/src\/assets\/\1/" | \
    sort | uniq > "$USED_ASSETS_FILE"

# Find assets referenced via src="/..." in public directory (these are in public/, not src/assets)
# But also check for any direct file references that might be in src/assets
grep -r --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" \
    -E 'src=["\x27][^"\x27]*\.(png|webp|jpg|jpeg|svg|webm|mp4|woff|woff2)' "$SRC_DIR" | \
    grep -E 'src=["\x27]/' | \
    sed -E 's/.*src=["\x27]\/([^"\x27]*\.(png|webp|jpg|jpeg|svg|webm|mp4|woff|woff2))["\x27].*/src\/assets\/\1/' | \
    grep "^src/assets/" >> "$USED_ASSETS_FILE" 2>/dev/null || true

# Find assets referenced in CSS files (url() references)
# Handle both relative paths (../assets/) and absolute paths (/assets/)
grep -r --include="*.css" --include="*.scss" \
    -E 'url\(["\x27]?[^)]*\.(png|webp|jpg|jpeg|svg|webm|mp4|woff|woff2)' "$SRC_DIR" | \
    sed -n -E 's/.*url\(["\x27]?\.\.\/assets\/([^"\x27)]+)["\x27]?\).*/src\/assets\/\1/p' >> "$USED_ASSETS_FILE" 2>/dev/null || true

# Remove duplicates and sort
sort "$USED_ASSETS_FILE" | uniq > "${USED_ASSETS_FILE}.tmp"
mv "${USED_ASSETS_FILE}.tmp" "$USED_ASSETS_FILE"

echo "📎 Referenced asset files found: $(wc -l < "$USED_ASSETS_FILE")"
echo ""

# Find unused assets
UNUSED_COUNT=0
UNUSED_FILES=()

echo "🗑️  UNUSED ASSETS:"
echo "=================="

while IFS= read -r asset_file; do
    if ! grep -Fxq "$asset_file" "$USED_ASSETS_FILE"; then
        echo "$asset_file"
        UNUSED_FILES+=("$asset_file")
        UNUSED_COUNT=$((UNUSED_COUNT + 1))
    fi
done < "$TEMP_FILE"

echo ""
echo "📊 SUMMARY:"
echo "==========="
echo "Total assets: $(wc -l < "$TEMP_FILE")"
echo "Used assets: $(wc -l < "$USED_ASSETS_FILE")"
echo "Unused assets: $UNUSED_COUNT"

if [ $UNUSED_COUNT -gt 0 ]; then
    if [ "$DELETE_MODE" = true ]; then
        echo ""
        echo "🗑️  DELETING UNUSED ASSETS..."
        echo "============================="
        
        DELETED_COUNT=0
        DELETED_SIZE=0
        
        for file in "${UNUSED_FILES[@]}"; do
            if [ -f "$file" ]; then
                # Get file size before deletion
                file_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null || echo "0")
                DELETED_SIZE=$((DELETED_SIZE + file_size))
                
                echo "Deleting: $file"
                rm -f "$file"
                DELETED_COUNT=$((DELETED_COUNT + 1))
            fi
        done
        
        # Convert bytes to human readable format
        if [ $DELETED_SIZE -gt 1048576 ]; then
            size_mb=$((DELETED_SIZE / 1048576))
            echo ""
            echo "✅ Deleted $DELETED_COUNT files (~${size_mb}MB freed)"
        elif [ $DELETED_SIZE -gt 1024 ]; then
            size_kb=$((DELETED_SIZE / 1024))
            echo ""
            echo "✅ Deleted $DELETED_COUNT files (~${size_kb}KB freed)"
        else
            echo ""
            echo "✅ Deleted $DELETED_COUNT files (~${DELETED_SIZE} bytes freed)"
        fi
    else
        echo ""
        echo "💡 To delete unused assets, run:"
        echo "   ./find-unused-assets.sh --delete"
        echo ""
        echo "⚠️  WARNING: Always review the list before deleting!"
        echo "   Some assets might be used in ways this script doesn't detect."
    fi
fi

# Cleanup
rm -f "$TEMP_FILE" "$USED_ASSETS_FILE"
