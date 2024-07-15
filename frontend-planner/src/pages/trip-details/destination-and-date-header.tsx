import { MapPin, Calendar, Settings2 } from "lucide-react";

export function DestainationAndDateHeader() {
  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400"/>
        <span className=" text-zinc-100">Florianópolis, Brasil</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400"/>
          <span className=" text-zinc-100">17 a 23 de Agosto</span>
        </div>

        <div className="w-px h-6 bg-zinc-800"></div>

        <button className="text-zinc-200 rounded-lg flex items-center gap-2 bg-zinc-800 py-2 px-5 hover:bg-zinc-700">
          Alterar local/data
          <Settings2 className="size-5"/>
        </button>
      </div>
    </div>
  )
}