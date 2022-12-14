const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center py-4 text-slate-400">
      <p>Copyright &copy; {year}</p>
    </footer>
  );
};

export default Footer;
