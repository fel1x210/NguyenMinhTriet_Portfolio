import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const STAR_COUNT = 2000;
const CIRCUIT_NODE_COUNT = 60;
const GRID_SIZE = 40;

function Starfield() {
  const ref = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(STAR_COUNT * 3);
    const col = new Float32Array(STAR_COUNT * 3);
    const palette = [
      new THREE.Color("#4fc3f7"),
      new THREE.Color("#b388ff"),
      new THREE.Color("#80cbc4"),
      new THREE.Color("#ffffff"),
    ];

    for (let i = 0; i < STAR_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.015;
      ref.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={STAR_COUNT}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={STAR_COUNT}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function GridFloor() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.material.opacity =
        0.12 + Math.sin(state.clock.elapsedTime * 0.5) * 0.04;
    }
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]}>
      <planeGeometry args={[GRID_SIZE, GRID_SIZE, GRID_SIZE, GRID_SIZE]} />
      <meshBasicMaterial
        color="#4fc3f7"
        wireframe
        transparent
        opacity={0.12}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function CircuitLines() {
  const ref = useRef();

  const segments = useMemo(() => {
    const lines = [];
    for (let i = 0; i < CIRCUIT_NODE_COUNT; i++) {
      const x1 = (Math.random() - 0.5) * 30;
      const y1 = (Math.random() - 0.5) * 20;
      const z1 = (Math.random() - 0.5) * 30;

      const axis = Math.floor(Math.random() * 3);
      const len = 1 + Math.random() * 3;
      const x2 = axis === 0 ? x1 + len : x1;
      const y2 = axis === 1 ? y1 + len : y1;
      const z2 = axis === 2 ? z1 + len : z1;

      lines.push({ start: [x1, y1, z1], end: [x2, y2, z2] });
    }
    return lines;
  }, []);

  const geometry = useMemo(() => {
    const positions = [];
    segments.forEach(({ start, end }) => {
      positions.push(...start, ...end);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geo;
  }, [segments]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.material.opacity =
        0.18 + Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    }
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial
        color="#00e5ff"
        transparent
        opacity={0.2}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

function CircuitNodes() {
  const count = 35;
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push([
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 30,
      ]);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={ref}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06, 6, 6]} />
          <meshBasicMaterial
            color="#b388ff"
            transparent
            opacity={0.6}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

function NebulaSphere() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
      ref.current.rotation.z = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -20]}>
      <sphereGeometry args={[18, 32, 32]} />
      <meshBasicMaterial
        color="#1a237e"
        transparent
        opacity={0.08}
        side={THREE.BackSide}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function SpaceCSBackground() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      const mx = state.pointer.x * 0.3;
      const my = state.pointer.y * 0.15;
      groupRef.current.rotation.y +=
        (mx - groupRef.current.rotation.y) * 0.02;
      groupRef.current.rotation.x +=
        (my - groupRef.current.rotation.x) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <NebulaSphere />
      <Starfield />
      <GridFloor />
      <CircuitLines />
      <CircuitNodes />
    </group>
  );
}
