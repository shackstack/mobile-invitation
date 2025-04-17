interface InvitationProps {
  mainImage: string;
}

const Invitation = ({ mainImage }: InvitationProps) => {
  return (
    <section className="text-center my-[60px] py-5 border-b border-[#f0f0f0]">
      <div className="mb-[30px]">
        <img
          src={mainImage}
          alt="신랑 신부 웨딩 사진"
          className="w-full max-w-[400px] rounded-lg shadow-md"
        />
      </div>
      <div className="my-10">
        <p className="font-['Noto_Serif_KR'] text-[1.1rem] leading-8 text-[#555] break-keep">
          서로 다른 두 사람이 만나
          <br />
          사랑으로 하나의 가정을 이루려 합니다.
          <br />
          귀한 걸음 하시어
          <br />
          축복해 주시면 감사하겠습니다.
        </p>
      </div>
    </section>
  );
};

export default Invitation;
