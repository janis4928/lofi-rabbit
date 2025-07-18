// app/page.tsx
import Background from "../components/Background";
import MusicPlayer from "../components/MusicPlayer";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Background />
      <MusicPlayer />
    </div>
  );
}
