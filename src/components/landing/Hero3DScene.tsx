import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef, Suspense, useMemo, useCallback } from 'react';
import * as THREE from 'three';

// Single shared mouse ref - no per-component listeners
const globalMouse = { x: 0, y: 0 };
if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', (e) => {
    globalMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    globalMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, { passive: true });
}

interface ShapeProps {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
  mouseInfluence?: number;
}

function GlassSphere({ position, color, speed, scale, mouseInfluence = 0.8, distort = 0.35 }: ShapeProps & { distort?: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const basePos = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * speed * 0.2;
    mesh.current.rotation.y += delta * speed * 0.15;
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, basePos.x + globalMouse.x * mouseInfluence, delta * 2.5);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, basePos.y + globalMouse.y * mouseInfluence * 0.6, delta * 2.5);
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={mesh} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial color={color} transparent opacity={0.35} distort={distort} speed={speed * 0.6} roughness={0.1} metalness={0.3} />
      </mesh>
    </Float>
  );
}

function GlowRing({ position, color, speed, scale, mouseInfluence = 0.6 }: ShapeProps) {
  const mesh = useRef<THREE.Mesh>(null);
  const basePos = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * speed * 0.3;
    mesh.current.rotation.y += delta * speed * 0.4;
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, basePos.x + globalMouse.x * mouseInfluence, delta * 2);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, basePos.y + globalMouse.y * mouseInfluence * 0.5, delta * 2);
  });

  return (
    <Float speed={speed * 0.7} rotationIntensity={0.6} floatIntensity={0.5}>
      <mesh ref={mesh} position={position} scale={scale}>
        <torusGeometry args={[1, 0.12, 16, 64]} />
        <meshStandardMaterial color={color} transparent opacity={0.45} roughness={0.05} metalness={0.95} emissive={color} emissiveIntensity={0.2} />
      </mesh>
    </Float>
  );
}

function WireOctahedron({ position, color, speed, scale, mouseInfluence = 0.7 }: ShapeProps) {
  const mesh = useRef<THREE.Mesh>(null);
  const basePos = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * speed * 0.35;
    mesh.current.rotation.z += delta * speed * 0.12;
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, basePos.x + globalMouse.x * mouseInfluence, delta * 1.8);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, basePos.y + globalMouse.y * mouseInfluence * 0.5, delta * 1.8);
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.7} floatIntensity={0.4}>
      <mesh ref={mesh} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} transparent opacity={0.3} wireframe roughness={0} metalness={1} emissive={color} emissiveIntensity={0.25} />
      </mesh>
    </Float>
  );
}

function FloatingDodecahedron({ position, color, speed, scale, mouseInfluence = 0.5 }: ShapeProps) {
  const mesh = useRef<THREE.Mesh>(null);
  const basePos = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * speed * 0.15;
    mesh.current.rotation.y += delta * speed * 0.2;
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, basePos.x + globalMouse.x * mouseInfluence, delta * 1.5);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, basePos.y + globalMouse.y * mouseInfluence * 0.4, delta * 1.5);
  });

  return (
    <Float speed={speed * 0.4} rotationIntensity={0.4} floatIntensity={0.3}>
      <mesh ref={mesh} position={position} scale={scale}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} transparent opacity={0.15} roughness={0.2} metalness={0.8} wireframe />
      </mesh>
    </Float>
  );
}

function Particles({ count = 60 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return pos;
  }, [count]);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) s[i] = Math.random() * 0.03 + 0.02;
    return s;
  }, [count]);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.015;
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, globalMouse.x * 0.4, delta);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, globalMouse.y * 0.3, delta);
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#60a5fa" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function ConnectingLines() {
  const lineRef = useRef<THREE.LineSegments>(null);

  const positions = useMemo(() => {
    const points: number[] = [];
    const nodes = Array.from({ length: 8 }, () => [
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 4 - 3,
    ]);
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.hypot(nodes[i][0] - nodes[j][0], nodes[i][1] - nodes[j][1], nodes[i][2] - nodes[j][2]);
        if (dist < 6) {
          points.push(...nodes[i], ...nodes[j]);
        }
      }
    }
    return new Float32Array(points);
  }, []);

  useFrame((_, delta) => {
    if (!lineRef.current) return;
    lineRef.current.rotation.y += delta * 0.01;
    lineRef.current.position.x = THREE.MathUtils.lerp(lineRef.current.position.x, globalMouse.x * 0.2, delta);
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color="#6366f1" transparent opacity={0.08} />
    </lineSegments>
  );
}

export default function Hero3DScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ pointerEvents: 'none' }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
          <pointLight position={[-4, 3, 2]} intensity={0.5} color="#60a5fa" />
          <pointLight position={[4, -2, 3]} intensity={0.3} color="#8b5cf6" />
          <pointLight position={[0, 4, -1]} intensity={0.2} color="#3b82f6" />

          <Particles count={70} />
          <ConnectingLines />

          {/* Large glass sphere - top right */}
          <GlassSphere position={[3.8, 1.8, -2]} color="#3b82f6" speed={1.2} distort={0.35} scale={1.4} mouseInfluence={1.2} />

          {/* Glowing ring - bottom left */}
          <GlowRing position={[-4, -1.5, -1]} color="#6366f1" speed={1.4} scale={0.9} mouseInfluence={0.8} />

          {/* Small sphere - top left */}
          <GlassSphere position={[-3, 2.5, -3]} color="#a78bfa" speed={1.8} distort={0.25} scale={0.6} mouseInfluence={1} />

          {/* Wireframe octahedron - right center */}
          <WireOctahedron position={[4.5, -1.2, -1.5]} color="#60a5fa" speed={0.8} scale={0.7} mouseInfluence={0.7} />

          {/* Dodecahedron - left center */}
          <FloatingDodecahedron position={[-2, 0.5, -2.5]} color="#818cf8" speed={1} scale={0.6} mouseInfluence={0.6} />

          {/* Small ring - top center */}
          <GlowRing position={[1, 3, -3]} color="#3b82f6" speed={2} scale={0.4} mouseInfluence={0.9} />

          {/* Tiny sphere - bottom center */}
          <GlassSphere position={[0.8, -2.8, -2]} color="#6366f1" speed={1.6} distort={0.4} scale={0.45} mouseInfluence={0.8} />

          {/* Extra octahedron - far left */}
          <WireOctahedron position={[-5, -0.5, -3]} color="#a78bfa" speed={1.3} scale={0.4} mouseInfluence={0.5} />

          {/* Extra sphere - far right bottom */}
          <GlassSphere position={[5, -2.5, -3.5]} color="#818cf8" speed={1.1} distort={0.3} scale={0.35} mouseInfluence={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}
