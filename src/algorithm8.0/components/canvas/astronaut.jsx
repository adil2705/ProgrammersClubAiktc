import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Astronaut = () => {
    const astronaut = useGLTF("./astronaut/spaceship.glb");

    return (
        <primitive object={astronaut.scene} scale={3.5} position-y={0} rotation-y={0} />
    );
};

const AstronautCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Astronaut />

                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default AstronautCanvas;
