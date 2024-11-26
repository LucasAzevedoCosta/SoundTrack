import { useEffect, useState } from "react";
import MusicInList from "./MusicInList";

export default function MusicList() {
  const [musicList, setMusicList] = useState([]);

  const  fethMusicList = async () =>{
    try {
      await window.electronAPI.SendToElectron("music-get")
      await window.electronAPI.ReciveFromElectron("music-list", (event, arg) => {
        setMusicList(arg)
      })
    } catch (error) {
      console.log(`Erro ao obter a lista de musicas ${error}`)
    }
  }

  useEffect(() => {
    fethMusicList()
  }, [])

  return (
    <div className=" w-11/12">
      <h2 className="ml-5 text-white text-2xl">Music List</h2>
      {musicList.length === 0 ? (
        <p className="text-zinc-400">Vazio</p>
      ) : (
        musicList.map((music, index) => {
          return <MusicInList key={index} music={music} />;
        })
      )}
    </div>
  );
}
