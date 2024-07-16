import "./Header.css";

import ch from "../../../assets/ch.png";

export default function Header() {
  return (
    <div className="flex justify-between px-4 py-6">
      <img src="/vite.svg" />
      <h1 className="text-xl font-bold text-black-50 text-center">
        Нохчийн Мотт
      </h1>
      <img src={ch} className="w-8 h-8  object-cover rounded-full" />
    </div>
  );
}
