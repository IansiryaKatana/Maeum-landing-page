import logoRed from "@/assets/logo-red-color.png";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 text-center" aria-label="Footer">
      <img src={logoRed} alt="Maeum" className="mx-auto w-full max-w-[56rem] h-auto px-4" />
    </footer>
  );
};

export default Footer;
