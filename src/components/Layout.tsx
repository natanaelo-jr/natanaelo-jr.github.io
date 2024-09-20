import Button from "./Button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen overflow-y-auto bg-zinc-950 font-qs text-zinc-300">
      <div className="w-full flex items-center h-14 top-0 left-0 py-4 border-b-[0.25px] border-zinc-800 px-2">
        <div className="~sm/md:~pl-0/[48px] w-full flex items-center ~sm/md:~gap-[8px]/[32px]">
          <Button>HOME</Button>
          <Button>ABOUT</Button>
          <Button>PROJECTS</Button>
          <Button>CONTACT</Button>
        </div>
      </div>
      <div>{children}</div>
      <div className="bottom-0 h-6 w-full items-center flex justify-center border-t border-zinc-900">
        <span className="text-xs font-light font-sans text-zinc-400">a</span>
      </div>
    </div>
  );
};

export default Layout;
