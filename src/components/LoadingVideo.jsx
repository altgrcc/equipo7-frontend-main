// src/components/IntroVideo.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import videoShe from "../assets/video-she.mp4";

const LoadingVideo = () => {
    const videoRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const video = videoRef.current;

        const handleVideoEnd = () => {
            navigate("/dashboard");
        };

        if (video) {
            video.addEventListener("ended", handleVideoEnd);
        }

        return () => {
            if (video) {
                video.removeEventListener("ended", handleVideoEnd);
            }
        };
    }, [navigate]);

    return (
        <div className="video-container">
            <video ref={videoRef} src={videoShe} autoPlay muted className="video-fullscreen" />
        </div>
    );
};

export default LoadingVideo;
