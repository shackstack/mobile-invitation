interface CoupleInfoProps {
  groomName: string;
  groomFather: string;
  groomMother: string;
  brideName: string;
  brideFather: string;
  brideMother: string;
}

const CoupleInfo = ({
  groomName,
  groomFather,
  groomMother,
  brideName,
  brideFather,
  brideMother,
}: CoupleInfoProps) => {
  return (
    <section className="text-center my-[60px] py-5 border-b border-[#f0f0f0]">
      <div className="flex flex-col gap-[30px]">
        <div className="p-[15px] bg-[#f9f9f9] rounded-lg">
          <p className="text-[1.1rem] text-[#444]">
            {groomFather}·{groomMother}의 장남{" "}
            <strong className="font-semibold text-[#222]">{groomName}</strong>
          </p>
        </div>
        <div className="p-[15px] bg-[#f9f9f9] rounded-lg">
          <p className="text-[1.1rem] text-[#444]">
            {brideFather}·{brideMother}의 사녀{" "}
            <strong className="font-semibold text-[#222]">{brideName}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoupleInfo;
