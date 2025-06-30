import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-10 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground ">
        {" "}
        &copy; {new Date().getFullYear()} NHP29904.nhp. All rights reserved.
      </p>
      <a
        href="https://nhp299.github.io/NhpPortfolio/"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
