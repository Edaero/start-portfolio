// npm install --save react-lottie-player 로 설치 후 파일을 만듬

// https://github.com/mifi/react-lottie-player에서 가져온 리액트 로티 플레이어

import React from 'react'
import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

// 돌릴 파일 경로를 넣어준다.
import lottieJson from '/public/animation.json'

export default function Animation() {
    return (
        <Lottie
        loop
        animationData={lottieJson}
        play
        />
    )
}