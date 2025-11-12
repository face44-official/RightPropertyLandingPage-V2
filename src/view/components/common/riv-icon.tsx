import { useRive } from "@rive-app/react-canvas";

interface DynamicRiveProps {
  src: string;
  width?: number | string;
  autoplay?: boolean;
  stateMachine?: string;
  className?: string;
}

export default function DynamicRive({
  src,
  width = "100%",
  autoplay = true,
  stateMachine,
  className,
}: DynamicRiveProps) {
  const { RiveComponent } = useRive({
    src,
    autoplay,
    stateMachines: stateMachine ? [stateMachine] : undefined,
  });

  return (
    <div
      className={className}
      style={{
        width: "100%",
        maxWidth: typeof width === "number" ? `${width}px` : width,
        aspectRatio: "1 / 1", // Keeps the canvas square and consistent
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RiveComponent
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
