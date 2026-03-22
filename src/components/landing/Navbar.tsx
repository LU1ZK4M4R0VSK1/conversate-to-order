import logo from "@/assets/KamaTechLogo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <img src={logo} alt="KamaTech" className="h-8" />
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#problema" className="hover:text-foreground transition-colors">Problema</a>
          <a href="#solucao" className="hover:text-foreground transition-colors">Solução</a>
          <a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a>
          <a href="#beneficios" className="hover:text-foreground transition-colors">Benefícios</a>
          <a href="#casos-de-uso" className="hover:text-foreground transition-colors">Casos de uso</a>
        </div>
          <a
            href="https://wa.me/5541991736878"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-cta text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Agendar Demo
          </a>
      </div>
    </nav>
  );
};

export default Navbar;
