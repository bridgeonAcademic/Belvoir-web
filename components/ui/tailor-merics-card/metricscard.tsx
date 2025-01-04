import { ReactNode } from "react";

interface MetricscardProps {
  title: string;
  value: string | number;
  subtitile: string;
  color?: "blue" | "green" | "red" | "yellow";
  icon: ReactNode;
  iconforcard: ReactNode;
}

export default function Metricscard({
  title,
  value,
  icon,
  subtitile,
  color = "blue",
  iconforcard,
}: MetricscardProps) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600 border-blue-600",
    green: "bg-green-100 text-green-600 border-green-600",
    red: "bg-red-100 text-red-600 border-red-600",
    yellow: "bg-yellow-100 text-yellow-600 border-yellow-600",
  };

  return (
    <div
      className={`relative overflow-hidden flex flex-col gap-2 p-4 rounded-md border ${colorClasses[color]}`}
    >
      <p className={`text-[20px] font-medium`}>{title}</p>
      <div className="mt-4">
        <h1 className={`flex gap-2 text-4xl font-bold font-sans`}>
          {icon}{value}
        </h1>
      </div>
      <p className="text-[18px] font-semibold">{subtitile}</p>
      <div className="absolute -top-10 -right-10 opacity-30">
         {iconforcard}
      </div>
    </div>
  );
}
