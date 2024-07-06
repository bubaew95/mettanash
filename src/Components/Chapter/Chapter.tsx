import "./Chapter.css";

export default function ({ title, text, percent = 0 }) {
  return (
    <div className="bg-orange-400 flex justify-between rounded-lg mt-6">
      <div className="p-4">
        <h1 className="text-xl text-white font-bold">{title}</h1>
        <p className="text-white text-sm mt-1">{text}</p>
      </div>
      <div className="bg-white rounded-full w-24 h-24">{percent}%</div>
    </div>
  );
}
