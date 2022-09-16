import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ThreeDcube from "./ThreeDcube";
import { OrbitControls, softShadows } from "@react-three/drei";
softShadows();

function App() {
  return (
    <>
      <Canvas camera={{ position: [-7, 2, 10], fov: 50 }}>
        <Suspense fallback={<></>}>
          {/* 3D cube component*/}
          <ThreeDcube />
          {/* For rotaining the cube 3D */}
          <OrbitControls />
          {/* Lights to help illumnate the spinning boxe */}
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={0.7} />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
