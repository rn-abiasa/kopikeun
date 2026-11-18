import logo from "../assets/kopikeun.webp";
import { ChartNoAxesGantt } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed z-100 top-0 w-full flex justify-between items-center py-5 px-7">
      <img src={logo} className="h-12" />
      <button>
        <ChartNoAxesGantt />
      </button>
    </header>
  );
}
