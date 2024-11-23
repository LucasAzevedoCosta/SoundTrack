import BottomBar from "@/components/BottomBar";
import MainScreen from "@/components/MainScreen";
import ModalPlaylist from "@/components/ModalPlayList";
import Toast from "@/components/Toast";

export default function Home() {
  return (
    <main  className="flex flex-col h-screen" >
      <Toast/>
      <MainScreen/>
      <BottomBar/>
      <ModalPlaylist/>
    </main>
  )
}
