import {motion} from "framer-motion";
import Image from "next/image";
import {Inter} from "next/font/google";
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Floor from "./Floor";
import OrbitControls from "./OrbitControls"
import Script from 'next/script'


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 230,
                damping: 30,
            }}
        >
            <main className={`wrapper-container ${inter.className}`}>
                <div className="about-container">
                    <Canvas
                        shadows
                        camera={{
                            position: [-6, 7, 7],
                        }}
                    >
                        <OrbitControls />
                        <ambientLight color={"white"} intensity={0.3} />
                        <Floor/>
                    </Canvas>
                </div>
            </main>
        </motion.div>
    );
}