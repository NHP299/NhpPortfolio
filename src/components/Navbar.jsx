import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // sửa từ screenY => scrollY
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}>
      <div className="container flex items-center justify-between">
        <a
          href="hero"
          smooth={true}
          duration={500}
          className="text-xl font-bold text-primary flex items-center cursor-pointer">
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Nhp </span> Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <ScrollLink
              to={item.to}
              smooth="easeInOutCubic"
              duration={100}
              offset={-60}
              className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300">
              {item.name}
            </ScrollLink>
          ))}
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile nav menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}>
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <ScrollLink
                to={item.to}
                smooth="easeInOutCubic"
                duration={200}
                offset={-60}
                className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300">
                {item.name}
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
