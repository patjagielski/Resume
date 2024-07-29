import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function SceneLoader() {
    //TODO: Fix this
    const { camera } = useThree();
    const { scene } = useGLTF('/models/Penguin.glb') as any;

    useEffect(() => {
        camera.position.set(0, 1, 3);
    }, [camera]);

    return (
        <>
            {scene}
            <OrbitControls />
        </>
    );
}

export default SceneLoader;