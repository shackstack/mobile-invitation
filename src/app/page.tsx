import BankInfo from "@/components/BankInfo";
import Contact from "@/components/Contact";
import Directions from "@/components/Directions";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import WeddingInfo from "@/components/WeddingInfo";
import { WeddingData } from "@/types/wedding";

const weddingData: WeddingData = await fetch(
  `${process.env.AWS_S3_URL}/1/data.json`,
  { cache: "no-store" }
).then((res) => res.json());

function Home() {
  return (
    <div className="max-w-[500px] mx-auto  font-['Noto_Serif_KR'] text-[#333] bg-white">
      <header className={`text-center transition-all duration-800 ease-in-out`}>
        <p className="font-['Noto_Serif_KR'] text-[1.8rem] font-medium mt-4 text-[#444]">
          2025.07.05
        </p>
        <p className="text-[0.9rem] text-[#777]">토요일 낮 12시</p>
      </header>
      <section className="text-center my-[60px]">
        <div className="mb-[30px]">
          <img
            src={weddingData.images.main}
            alt="신랑 신부 웨딩 사진"
            className="w-full shadow-md object-cover"
          />
        </div>
        <div className="flex justify-center font-semibold gap-[10px] text-[1.2rem]">
          <span>{weddingData.coupleInfo.groomName}</span>
          <span>{weddingData.coupleInfo.brideName}</span>
        </div>
        <p className="my-[5px] text-[0.9rem] text-[#333] ">
          {weddingData.weddingInfo.date}
        </p>
        <p className="my-[5px] text-[0.9rem] text-[#333]">
          {weddingData.weddingInfo.venue}
        </p>
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
      <section className="text-center my-[60px]">
        <div className="flex flex-col">
          <div className="p-[15px] bg-[#f9f9f9] rounded-lg">
            <p className="text-[1.1rem] text-[#444]">
              {weddingData.coupleInfo.groomFather}·
              {weddingData.coupleInfo.groomMother}의 장남{" "}
              <strong className="font-semibold text-[#222]">
                {weddingData.coupleInfo.groomName}
              </strong>
            </p>
          </div>
          <div className="p-[15px] bg-[#f9f9f9] rounded-lg">
            <p className="text-[1.1rem] text-[#444]">
              {weddingData.coupleInfo.brideFather}·
              {weddingData.coupleInfo.brideMother}의 사녀{" "}
              <strong className="font-semibold text-[#222]">
                {weddingData.coupleInfo.brideName}
              </strong>
            </p>
          </div>
        </div>
      </section>
      <Gallery images={weddingData.images.gallery} />
      <WeddingInfo {...weddingData.weddingInfo} />
      <Directions {...weddingData.weddingInfo} />
      <Contact contact={weddingData.contact} />
      <BankInfo bankInfo={weddingData.bankInfo} />
      <Footer />
    </div>
  );
}

export default Home;
