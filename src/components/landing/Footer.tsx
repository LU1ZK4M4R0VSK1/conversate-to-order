import logo from "@/assets/KamaTechLogo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-card">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src={logo} alt="KamaTech" className="h-6" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} KamaTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
