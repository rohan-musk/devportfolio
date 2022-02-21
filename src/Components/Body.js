import React, { Suspense } from 'react'
import img from '../Images/3js.png'
import './css/Body.css'
import BodyText from './BodyText'
import MeDesk from './MeDesk'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Body = () => {

    return (
        <div className="body">
            {/* <img src={img} /> */}
            <div className="canv">
                <Canvas className="canvas" camera={{ fov: 40, position: [8, 0, -8] }}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} />
                    <Suspense fallback="null" ><MeDesk /></Suspense>
                </Canvas>
            </div>
            <BodyText />
        </div>
    )
}

export default Body
