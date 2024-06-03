import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  paragraph: string;
}

export default function Card({ icon, title, paragraph }: CardProps) {
  return (
    <div className="flex gap-4 p-4">
      <div className="p-2">
        <i>{icon}</i>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-lg text-blue-600">{title}</h1>
        <p className="text-sm w-60">{paragraph}</p>
      </div>
    </div>
  );
}
