import React, { useRef, useState } from 'react';
import styles from './Playsong.module.css'

const AudioPlayer = () => {
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(1); // Volume range is 0 to 1

    const playAudio = () => {
        audioRef.current.play();
    };

    const pauseAudio = () => {
        audioRef.current.pause();
    };

    const changeVolume = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        audioRef.current.volume = newVolume; // Set the volume
    };

    return (
        <div className={styles.playSongContainer}>
           
            <audio ref={audioRef} src="path_to_your_audio_file.mp3" />
            <div>
                <button onClick={playAudio}>Play</button>
                <button onClick={pauseAudio}>Pause</button>
            </div>
            <div>
                <label>
                    Volume:
                    <input 
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.1" 
                        value={volume} 
                        onChange={changeVolume} 
                    />
                </label>
            </div>
        </div>
    );
};

export default AudioPlayer;
