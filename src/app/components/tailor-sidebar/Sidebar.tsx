interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <div
      className={` fixed flex flex-col z-20 items-center justify-between w-[300px] bg-[#0E0E25] h-full text-white p-6 ${
        isOpen ? "translate-x-[-300px]" : "translate-x-0"
      } xl:translate-x-0 transition-transform duration-1000 ease-in-out`}
    >
      <h1 className="text-4xl text-center font-Libre">Belvoir.</h1>
      <div className="flex flex-col items-center gap-2 font-Cormorant">
        <p className="hover:bg-white/10 rounded-md w-full px-10 py-1 cursor-pointer">
          Dashboard
        </p>
        <p className="hover:bg-white/10 rounded-md w-full px-10 py-1 cursor-pointer">
          Earnings
        </p>
        <p className="hover:bg-white/10 rounded-md w-full px-10 py-1 cursor-pointer">
          Orders
        </p>
        <p className="hover:bg-white/10 rounded-md w-full px-10 py-1 cursor-pointer">
          Tasks
        </p>
        <p className="hover:bg-white/10 rounded-md w-full px-10 py-1 cursor-pointer">
          Reports
        </p>
        <p className="hover:bg-white/10 rounded-md w-full px-10 py-1 cursor-pointer">
          Settings
        </p>
      </div>
      <div className="w-full">
        <button className="w-full rounded-md py-1 bg-slate-200 font-Libre text-xl font-medium text-[#0E0E25]">
          Logout
        </button>
      </div>
    </div>
  );
}
