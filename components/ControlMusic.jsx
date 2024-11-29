import { useEffect, useRef, useState } from "react";
import NextIcon from "./icons/NextIcon";
import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";
import PreviousIcon from "./icons/PreviousIcon";
import { formatTime } from "@/functions/formatTime";

export default function ControlMusic() {
  const [musicPlayList, setMusicPlayList] = useState([]);
  const [audio, setAudio] = useState(null);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [musicIndex, setMusicIndex] = useState(0);


  useEffect(() =>{
    window.electronAPI.ReciveFromElectron("music-playable", async (event, music)=> {
      setMusicPlayList([...musicPlayList, music])
      if (!audioRef.current.currentSrc) {
        setAudio(`/musicas/${music}`);
        audioRef.current.load()
        setCurrentTime(audioRef.current.currentTime)
      }
    })
  },[musicPlayList])

  useEffect(()=>{
    if(audioRef.current){
      audioRef.current.addEventListener("loadedmetadata", () =>{
        setDuration(audioRef.current.duration)
      });
    }

    return() =>{
      audioRef.current.removeEventListener("loadedmetadata", () =>{})
    }
  }, [])



  useEffect(() => {
    if (audioRef.current){
      const musicDuration = audioRef.current.duration;
      const interval = setInterval(() =>{
        if(!audioRef.current.paused){
          const time = audioRef.current.currentTime;
          setCurrentTime(time);
          const progressbar = document.getElementById("progress-bar")
          progressbar.style.width = `${(time / musicDuration) * 100}%`
        }
      }, 1000)
      return () => clearInterval(interval);
    }
  }, [audioRef.current])


  function handlePlay() {
    if (audio !=null){
      audioRef.current.play();
      document.getElementById("play").classList.remove("flex")
      document.getElementById("play").classList.add("hidden")
      document.getElementById("pause").classList.add("flex")
      document.getElementById("pause").classList.remove("hidden")
    }
  }

  function handlePause() {
    if (audio !== null){
      audioRef.current.pause();
      document.getElementById("pause").classList.remove("flex")
      document.getElementById("pause").classList.add("hidden")
      document.getElementById("play").classList.add("flex")
      document.getElementById("play").classList.remove("hidden")      
    }
  }

  function handleProgressBarClick(event) {
    if (audioRef.current) {
      const progressBar = event.currentTarget;
      const clickPosition = event.nativeEvent.offsetX
      const totalWidth = progressBar.clientWidth;
      const porcentage = clickPosition / totalWidth;
      const time = audioRef.current.duration * porcentage;
      audioRef.current.currentTime = time
    }
  }

  function handlePrevious() {
    if(musicIndex > 0) {
      setMusicIndex(musicIndex - 1);
      setAudio(`/musicas/${musicPlayList[musicIndex - 1]}`)
      audioRef.current.load();
      audioRef.current.play();
      setCurrentTime(audioRef.current.currentTime);
    }
  }

  function handleNext() {
    if(musicIndex < musicPlayList.length - 1) {
      setMusicIndex(musicIndex + 1);
      setAudio(`/musicas/${musicPlayList[musicIndex + 1]}`)
      audioRef.current.load();
      audioRef.current.play();
      setCurrentTime(audioRef.current.currentTime);
    }
  }


  return (
    <div className="w-96 h-14 px-8 flex-col justify-center items-center gap-4 inline-flex">
      <div className="justify-center items-center gap-8 inline-flex">
        <div className="w-4 h-4 justify-start items-start gap-2.5 flex">
          <div className="w-4 h-4 relative">
            <PreviousIcon onClick={handlePrevious}/>
          </div>
        </div>
        <div
          id="play"
          className="flex w-4 h-4 justify-start items-start gap-2.5"
        >
          <div className="w-4 h-4 relative">
            <PlayIcon onClick={handlePlay}/>
          </div>
        </div>

        <audio ref={audioRef} onEnded={handleNext} >
          <source src={audio} type="audio/mp3" />
        </audio>

        <div
          id="pause"
          className="hidden w-4 h-4 justify-start items-start gap-2.5"
        >
          <div className="w-4 h-4 relative">
            <PauseIcon onClick={handlePause}/>
          </div>
        </div>

        <div className="w-4 h-4 justify-start items-start gap-2.5 flex">
          <div className="w-4 h-4 relative">
            <NextIcon onClick={handleNext}/>
          </div>
        </div>
      </div>

      <div className="self-stretch justify-start items-center gap-8 inline-flex">
        <div className="text-center text-xs text-white font-semibold leading-tight tracking-wide">
          <p>{audioRef.current ? formatTime(currentTime) : "00:00"}</p>
        </div>

        <div 
          className="w-96 h-1 relative bg-neutral-600 rounded-full"
          onClick={handleProgressBarClick}
        >
          <div
            id="progress-bar"
            className="h-1 w-1 rounded-full bg-white absolute top-1/2 transform -translate-y-1/2"
            style={{
              left: `${audioRef.current ? (audioRef.current.currentTime / audioRef.current.duration) * 100 : 0}%`
            }}
          />
        </div>
        <div className="text-center text-xs text-white font-semibold leading-tight tracking-wide">
        {audioRef.current ? formatTime (duration) : "00:00"}
        </div>
      </div>
    </div>
  );
}
