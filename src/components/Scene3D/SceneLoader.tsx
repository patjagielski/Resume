import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

type ModelProps = {
    url: string;
};

function Model({ url }: ModelProps) {
    const gltf = useGLTF(url)

    return (<primitive object={gltf.scene} scale={[0.25, 0.25, 0.25]} position={[0, 0, 0]} />)
}

function Scene() {
    const { camera, gl } = useThree();

    useEffect(() => {
        camera.position.set(4, 3, 2);
        gl.setPixelRatio(window.devicePixelRatio);
    }, [camera, gl]);

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Model url="/models/Penguin.glb" />
            <OrbitControls
                enableRotate={false}
                enableZoom={false}
                enablePan={false} />
        </>
    );
}

function SceneLoader() {
    return (
        <div className='h-72'>
            <Suspense>
                <Canvas>
                    <Scene />
                </Canvas>
            </Suspense>
        </div>
    );
}

export default SceneLoader;