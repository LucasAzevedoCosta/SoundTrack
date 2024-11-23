import ControlMusic from "./ControlMusic";
import PlayListIcon from "./icons/PlayListIcon";

export default function BottomBar() {
  function HandleModalPlayList() {
    document.getElementById("modal-play-list").classList.toggle("hidden");
  }
    return (
      <>
        <nav className="fixed bottom-0 pt-4 w-full h-20 bg-[#1F1F22] flex justify-center">
          <ControlMusic/>
        </nav>
        <div  className="absolute flex justify-end items-center bottom-0 right-0 p-7">
          <PlayListIcon onClick={HandleModalPlayList}/>
        </div>
      </>
    );
  }