interface WeddingInfoProps {
  date: string;
  time: string;
  venue: string;
  address: string;
}

const WeddingInfo = ({ date, time, venue, address }: WeddingInfoProps) => {
  return (
    <section className="mt-[60px]">
      <h2 className="font-['Noto_Serif_KR'] text-[1.5rem] text-center mb-[30px] font-medium text-[#555]">
        결혼식 안내
      </h2>

      <div className="flex flex-col gap-[30px] bg-[#f9f9f9] p-5 rounded-lg">
        <div>
          <h3 className="text-[1.1rem] text-[#666] mb-[10px] pb-[5px] border-b border-[#eee]">
            날짜 및 시간
          </h3>
          <p className="my-[5px] text-[1rem] text-[#333]">{date}</p>
          <p className="my-[5px] text-[1rem] text-[#333]">{time}</p>
        </div>

        <div>
          <h3 className="text-[1.1rem] text-[#666] mb-[10px] pb-[5px] border-b border-[#eee]">
            장소
          </h3>
          <p className="my-[5px] text-[1rem] text-[#333]">{venue}</p>
          <p className="my-[5px] text-[1rem] text-[#333]">{address}</p>
        </div>
      </div>
    </section>
  );
};

export default WeddingInfo;
