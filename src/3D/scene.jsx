import { Circle, Html, OrbitControls, Stats, useProgress } from "@react-three/drei";
import { Canvas, useFrame, useLoader, extend, useThree } from "@react-three/fiber";
import React, { useState, Suspense, useRef, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { emoji, useReward } from "react-rewards";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(2)}% loaded</Html>;
}

const Model = ({ glbSource, ...props }) => {
  const gltf = useLoader(GLTFLoader, glbSource);
  const modelRef = useRef(null);
  const { reward: emojiReward, isAnimating: emojiIsAnimating } = useReward("emojiReward", "emoji", {
    emoji: ["🔥", "🤓"],
    zIndex: 0,
    spread: 100,
    elementCount: 3,
    elementSize: 50,
    decay: 0.94
  });

  useFrame((_, delta) => {
    if (modelRef.current) {
      // modelRef.current.rotation.x += 0.005;
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <primitive
        ref={modelRef}
        onClick={() => {
          console.log("onClick");
          emojiReward();
        }}
        object={gltf.scene}
        position={[0, 0, 0]}
        castShadow
      />
      <EffectComposer>
        <Bloom
          intensity={10}
          width={500}
          height={1000}
          kernelSize={3}
          luminanceThreshold={1}
          luminanceSmoothing={1}
        />
      </EffectComposer>
    </>
  );
};

const Controls = () => {
  return (
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
    />
  );
};

const Scene = ({ glbSource }) => {
  return (
    <div className="h-full w-full">
      <span id="emojiReward" />
      <Canvas camera={{ position: [0.5, 0.5, 2] }} shadows>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[0.6, 0.6, 2]} castShadow intensity={Math.PI * 1} />
          <Model glbSource={glbSource} />
          <Controls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
