import ImportFiles from "./ImportFiles";
import MusicList from "./MusicList";

export default function MainScreen() {
  return (
    <section className="grow bg-[#171719] flex flex-row">
      <div className="w-1/6 bg-[#212124] p-10">
        <ImportFiles />
      </div>
      <main className="flex mt-10 w-full flex-row justify-center h-auto" style={{ overflowY: "auto", height: "calc(100vh - 10rem)" }}>
        <MusicList />
      </main>
    </section>
  );
}
