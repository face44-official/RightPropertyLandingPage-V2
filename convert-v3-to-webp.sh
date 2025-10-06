#!/bin/bash

# Convert all PNG files in src/assets/v3 to WebP format
# Creates a parallel directory structure in src/assets/v3-webp
# Usage: ./convert-v3-to-webp.sh [quality]
# Quality: 1-100 (default: 80)

set -e

# Default WebP quality
QUALITY=${1:-80}

# Validate quality parameter
if ! [[ "$QUALITY" =~ ^[0-9]+$ ]] || [ "$QUALITY" -lt 1 ] || [ "$QUALITY" -gt 100 ]; then
    echo "❌ Error: Quality must be a number between 1-100"
    echo "Usage: $0 [quality]"
    echo "Example: $0 80"
    exit 1
fi

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ Error: cwebp is not installed"
    echo ""
    echo "Install with:"
    echo "  macOS: brew install webp"
    echo "  Ubuntu/Debian: sudo apt-get install webp"
    echo "  CentOS/RHEL: sudo yum install libwebp-tools"
    exit 1
fi

SOURCE_DIR="src/assets/v3"
TARGET_DIR="src/assets/v3-webp"

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "❌ Error: Source directory '$SOURCE_DIR' does not exist"
    exit 1
fi

echo "🔄 Converting PNG files to WebP (quality: $QUALITY%)"
echo "Source: $SOURCE_DIR"
echo "Target: $TARGET_DIR"
echo ""

# Create target directory
mkdir -p "$TARGET_DIR"

# Find all PNG files and convert them
CONVERTED_COUNT=0
TOTAL_ORIGINAL_SIZE=0
TOTAL_WEBP_SIZE=0
FAILED_COUNT=0

while IFS= read -r -d '' png_file; do
    # Get relative path from source directory
    rel_path="${png_file#$SOURCE_DIR/}"
    
    # Create target file path with .webp extension
    webp_file="$TARGET_DIR/${rel_path%.png}.webp"
    
    # Create target directory if it doesn't exist
    webp_dir=$(dirname "$webp_file")
    mkdir -p "$webp_dir"
    
    echo "Converting: $rel_path"
    
    # Get original file size
    if [[ "$OSTYPE" == "darwin"* ]]; then
        original_size=$(stat -f%z "$png_file" 2>/dev/null || echo "0")
    else
        original_size=$(stat -c%s "$png_file" 2>/dev/null || echo "0")
    fi
    
    # Convert PNG to WebP
    if cwebp -q "$QUALITY" "$png_file" -o "$webp_file" >/dev/null 2>&1; then
        # Get WebP file size
        if [[ "$OSTYPE" == "darwin"* ]]; then
            webp_size=$(stat -f%z "$webp_file" 2>/dev/null || echo "0")
        else
            webp_size=$(stat -c%s "$webp_file" 2>/dev/null || echo "0")
        fi
        
        TOTAL_ORIGINAL_SIZE=$((TOTAL_ORIGINAL_SIZE + original_size))
        TOTAL_WEBP_SIZE=$((TOTAL_WEBP_SIZE + webp_size))
        CONVERTED_COUNT=$((CONVERTED_COUNT + 1))
        
        # Calculate compression ratio
        if [ "$original_size" -gt 0 ]; then
            compression_ratio=$((100 - (webp_size * 100 / original_size)))
            echo "  ✅ Success (${compression_ratio}% smaller)"
        else
            echo "  ✅ Success"
        fi
    else
        echo "  ❌ Failed to convert"
        FAILED_COUNT=$((FAILED_COUNT + 1))
    fi
    
done < <(find "$SOURCE_DIR" -name "*.png" -type f -print0)

echo ""
echo "📊 CONVERSION SUMMARY:"
echo "======================"
echo "Files converted: $CONVERTED_COUNT"
echo "Files failed: $FAILED_COUNT"

if [ $CONVERTED_COUNT -gt 0 ]; then
    # Calculate total size savings
    if [ $TOTAL_ORIGINAL_SIZE -gt 0 ]; then
        total_savings=$((TOTAL_ORIGINAL_SIZE - TOTAL_WEBP_SIZE))
        savings_percent=$((100 - (TOTAL_WEBP_SIZE * 100 / TOTAL_ORIGINAL_SIZE)))
        
        # Format file sizes
        format_size() {
            local size=$1
            if [ $size -gt 1048576 ]; then
                echo "$((size / 1048576))MB"
            elif [ $size -gt 1024 ]; then
                echo "$((size / 1024))KB"
            else
                echo "${size}B"
            fi
        }
        
        echo "Original size: $(format_size $TOTAL_ORIGINAL_SIZE)"
        echo "WebP size: $(format_size $TOTAL_WEBP_SIZE)"
        echo "Space saved: $(format_size $total_savings) (${savings_percent}%)"
    fi
    
    echo ""
    echo "✅ Conversion complete!"
    echo "WebP files are available in: $TARGET_DIR"
else
    echo ""
    echo "⚠️  No PNG files were converted."
fi

if [ $FAILED_COUNT -gt 0 ]; then
    echo ""
    echo "⚠️  $FAILED_COUNT files failed to convert. Check the output above for details."
fi
