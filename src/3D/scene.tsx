import { Circle, Html, OrbitControls, Stats, useProgress } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(2)}% loaded</Html>;
}

interface SceneProps {
  glbSource: string;
}

const Model: React.FC<{ glbSource: string }> = ({ glbSource }) => {
  const gltf = useLoader(GLTFLoader, glbSource);
  const modelRef = useRef<THREE.Group>(null);

  // Use useFrame to apply rotation to the model on every frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust the value for speed of spinning
    }
  });

  return (
    <primitive ref={modelRef} object={gltf.scene} position={[0, 0, 0]} castShadow>
      {/* Adding Glow Effect */}
      <meshStandardMaterial
        color="red"
        emissive="cyan" // Emissive color for glow
        emissiveIntensity={100} // Intensity of the glow
      />
    </primitive>
  );
};

const Scene: React.FC<SceneProps> = ({ glbSource }) => {
  return (
    <Canvas camera={{ position: [0.1, 0, 0.1] }} shadows>
      <Suspense fallback={<Loader />}>
        <directionalLight position={[0.3, 0.2, 0.1]} castShadow intensity={Math.PI * 1} />
        <Model glbSource={glbSource} />
        {/* <axesHelper args={[5]} /> */}
        {/* <OrbitControls target={[0, 1, 0]} /> */}
        <Stats />
        <EffectComposer>
          <Bloom
            intensity={10} // Adjust the intensity of the bloom
            width={500} // Width of the bloom effect
            height={1000} // Height of the bloom effect
            kernelSize={3} // Size of the bloom kernel (1, 2, 3)
            luminanceThreshold={1} // Threshold for luminance to consider as bright
            luminanceSmoothing={1} // Smoothing for luminance
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
