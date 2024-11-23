import { useRef, useState } from "react";
import NextIcon from "./icons/NextIcon";
import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";
import PreviousIcon from "./icons/PreviousIcon";

export default function ControlMusic() {
  const [musicPlayList, setMusicPlayList] = useState([]);
  const [audio, setAudio] = useState(null);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [musicIndex, setMusicIndex] = useState(0);

  return (
    <div className="w-96 h-14 px-8 flex-col justify-center items-center gap-4 inline-flex">
      <div className="justify-center items-center gap-8 inline-flex">
        <div className="w-4 h-4 justify-start items-start gap-2.5 flex">
          <div className="w-4 h-4 relative">
            <PreviousIcon/>
          </div>
        </div>
        <div
          id="play"
          className="flex w-4 h-4 justify-start items-start gap-2.5"
        >
          <div className="w-4 h-4 relative">
            <PlayIcon/>
          </div>
        </div>

        <audio>
          <source type="audio/mp3" />
        </audio>

        <div
          id="pause"
          className="hidden w-4 h-4 justify-start items-start gap-2.5"
        >
          <div className="w-4 h-4 relative">
            <PauseIcon/>
          </div>
        </div>

        <div className="w-4 h-4 justify-start items-start gap-2.5 flex">
          <div className="w-4 h-4 relative">
            <NextIcon/>
          </div>
        </div>
      </div>

      <div className="self-stretch justify-start items-center gap-8 inline-flex">
        <div className="text-center text-xs text-white font-semibold leading-tight tracking-wide">
          <p>"00:00"</p>
        </div>

        <div className="w-96 h-1 relative bg-neutral-600 rounded-full">
          <div
            id="progress-bar"
            className="h-1 w-1 rounded-full bg-white absolute top-1/2 transform -translate-y-1/2"
          />
        </div>

        <div className="text-center text-xs text-white font-semibold leading-tight tracking-wide">
          "00:00"
        </div>
      </div>
    </div>
  );
}
