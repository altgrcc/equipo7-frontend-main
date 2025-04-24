// src/components/LoadingVideo.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import videoShe from "../assets/video-she.mp4";

function LoadingVideo({ onComplete }) {
    const navigate = useNavigate();
    const videoRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 8000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="video-container">
            <video
                ref={videoRef}
                src={videoShe}
                autoPlay
                muted
                className="video-fullscreen"
            />
        </div>
    );
} 

export default LoadingVideo;

