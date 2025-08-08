import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/models/Football.glb");
  return <primitive object={gltf.scene} />;
};

const Football = () => {
  return (
    <Canvas style={{ height: 500, width: "100%" }}>
      <ambientLight />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default Football;
