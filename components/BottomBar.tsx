import {
  ChartBarIcon,
  RectangleStackIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 right-0 left-0 w-full p-2 bg-slate-50 flex justify-around">
      <Link
        href={"/ranking"}
        className="p-2 rounded-full group hover:bg-blue-500 transition duration-200"
      >
        <ChartBarIcon className="w-8 h-8 text-blue-600 group-hover:text-white transition duration-200" />
      </Link>
      <Link
        href={"/"}
        className="p-2 rounded-full group hover:bg-blue-500 transition duration-200"
      >
        <RectangleStackIcon className="w-8 h-8 text-blue-600 group-hover:text-white transition duration-200" />
      </Link>
      <Link
        href={"/profile"}
        className="p-2 rounded-full group hover:bg-blue-500 transition duration-200"
      >
        <UserCircleIcon className="w-8 h-8 text-blue-600 group-hover:text-white transition duration-200" />
      </Link>
    </div>
  );
}
