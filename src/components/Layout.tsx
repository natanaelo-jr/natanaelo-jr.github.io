import Button from "./Button";
import { useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY < scrollPos || scrollPos < 56);
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  function goToHome() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function goToAbout() {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    setTimeout(() => setShowHeader(false), 750);
    return;
  }

  async function goToProjects() {
    window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
    setTimeout(() => setShowHeader(false), 750);
    return;
  }

  async function goToContact() {
    window.scrollTo({ top: window.innerHeight * 3, behavior: "smooth" });
    setTimeout(() => setShowHeader(false), 750);
    return;
  }

  return (
    <div className="relative bg-zinc-950 font-qs text-zinc-300">
      <div
        className={`fixed top-0 left-0 w-full bg-zinc-950 flex items-center h-14 border-b border-zinc-800 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="~sm/md:~pl-0/[48px] w-full flex items-center ~sm/md:~gap-[8px]/[32px]">
          <Button onClick={goToHome}>HOME</Button>
          <Button onClick={goToAbout}>ABOUT</Button>
          <Button onClick={goToProjects}>PROJECTS</Button>
          <Button onClick={goToContact}>CONTACT</Button>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Layout;
