import React, { useState } from 'react'
import Lottie from 'react-lottie'

import animationData from '../Animations/instagram.json'

const InstagramLogo = () => {

    var directionMenu = 1;

    const [isPaused, setIsPaused] = useState(true)
    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div onMouseEnter={() => setIsPaused(false)} onMouseLeave={() => setIsPaused(true)}>
            <Lottie options={defaultOptions}
                isStopped={isPaused}
                height={40}
                width={40}
                isClickToPauseDisabled={true}
            />

        </div>
    )
}

export default InstagramLogo
