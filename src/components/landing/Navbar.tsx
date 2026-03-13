import logo from "@/assets/KamaTechLogo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <img src={logo} alt="KamaTech" className="h-8" />
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#problem" className="hover:text-foreground transition-colors">Problem</a>
          <a href="#solution" className="hover:text-foreground transition-colors">Solution</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#benefits" className="hover:text-foreground transition-colors">Benefits</a>
          <a href="#use-cases" className="hover:text-foreground transition-colors">Use cases</a>
        </div>
        <a href="#cta" className="bg-gradient-cta text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
          Book a Demo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
