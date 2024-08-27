import { useEffect, useState } from "react";

export default function Stopwatch() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let timerId;
    if (running) {
      timerId = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [running]);

  return (
    <div className="p-12 mx-auto space-y-4 max-w-[300px]">
      <div className="font-bold text-center text-3xl">
        Zamanlayıcı: {count}s
      </div>
      <div className="flex justify-between">
        <button
          className={`${
            !running ? "text-amber-500/40" : "text-amber-500"
          } font-bold`}
          onClick={() => setRunning(false)}
          disabled={!running}
        >
          Durdur
        </button>
        <button
          className={`${
            running ? "text-green-500/40" : "text-green-500"
          } font-bold`}
          onClick={() => setRunning(true)}
          disabled={running}
        >
          Başlat
        </button>
      </div>
    </div>
  );
}
