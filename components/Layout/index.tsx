// comp
import { Sidebar, Navbar } from "..";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main className="xl:w-[1200px] m-auto overflow-hidden h-[100vh]">
      <Navbar />
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          <Sidebar />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
