const Header = () => {
  return (
    <header
      className={`text-center py-10 transition-all duration-800 ease-in-out`}
    >
      <div className="bg-[#f8f8f8] rounded-[20px] py-[15px] px-[30px] inline-block mb-5 shadow-md">
        <p className="text-[0.9rem] m-0 text-[#888]">2025</p>
        <h2 className="text-2xl my-[5px] font-semibold text-[#333]">07.05</h2>
        <p className="text-[0.9rem] m-0 text-[#777]">토요일 낮 12시</p>
      </div>
      <h1 className="font-['Noto_Serif_KR'] text-[1.8rem] font-medium my-5 text-[#444]">
        우리, 결혼합니다
      </h1>
    </header>
  );
};

export default Header;
