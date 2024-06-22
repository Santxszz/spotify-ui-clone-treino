import Image from "next/image";
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <aside className="w-72 bg-zinc-950 p-6">

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            <nav className="space-y-5 mt-10">
              <a href="#" className="flex items-center gap-4 text-xs font-semibold text-200"> <HomeIcon /> Home </a>
              <a href="#" className="flex items-center gap-4 text-xs font-semibold text-200"> <Search /> Search </a>
              <a href="#" className="flex items-center gap-4 text-xs font-semibold text-200"> <Library /> Your Library </a>
            </nav>

            <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
              <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100"> Playlist 1 </a>
              <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100"> Playlist  </a>
              <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100"> Playlist  </a>
              <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100"> Playlist  </a>
            </nav>


          </aside>
          <main className="flex-1 p-6">
            <div className="flex items-center gap-3">
              <button className="rounded-full bg-black/40 p-1"> <ChevronLeft /> </button>
              <button className="rounded-full bg-black/40 p-1"> <ChevronRight /> </button>
            </div>

            <h1 className="font-semibold text-3xl mt-10"> Good Afternoon </h1>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <a href="#" className="bg-white/10 rounded flex items-center overflow-hidden hover:bg-white/20">
              <Image src="/image.jpg" width={104} height={104} alt="Capa do album"/>
              <strong>Nome Música</strong>
              <button className="p-2 rounded-full w-12 h-12 flex items-center justify-center bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible "> <Play /> </button>
              </a>

              <a href="#" className="bg-white/10 rounded flex items-center overflow-hidden hover:bg-white/20">
              <Image src="/image.jpg" width={104} height={104} alt="Capa do album"/>
              <strong>Nome Música</strong>
              </a>

              <a href="#" className="bg-white/10 rounded flex items-center overflow-hidden hover:bg-white/20">
              <Image src="/image.jpg" width={104} height={104} alt="Capa do album"/>
              <strong>Nome Música</strong>
              </a>
            </div>

          </main>
        </div>
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
          footer
        </footer>
      </div>
    </>
  );
}
