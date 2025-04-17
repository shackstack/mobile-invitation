const Footer = () => {
  return (
    <footer className="text-center py-[30px] mt-[60px]">
      <p className="text-[0.8rem] text-[#999]">
        감사합니다 © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
