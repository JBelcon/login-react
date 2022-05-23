import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 bg-white shadow-md z-10">
      <section className=" flex justify-between items-center p-4 ">
        <Logo />
        <Navbar />
      </section>
    </header>
  );
};

export { Header };
