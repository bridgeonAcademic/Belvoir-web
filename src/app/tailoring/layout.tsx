// app/layout.tsx

import Navbar from "../components/tailor-navbar/Navbar";
import Sidebar from "../components/tailor-sidebar/Sidebar";
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="xl:ml-[300px] flex-1 flex flex-col">
          <Navbar />
          <div className="mt-[40px] flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
