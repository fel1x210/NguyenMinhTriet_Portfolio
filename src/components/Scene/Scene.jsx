import { Canvas } from "@react-three/fiber";
import SpaceCSBackground from "./SpaceCSBackground";

export default function Scene() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "auto",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <SpaceCSBackground />
      </Canvas>
    </div>
  );
}
