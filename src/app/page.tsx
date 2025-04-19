import BankInfo from "@/components/BankInfo";
import Contact from "@/components/Contact";
import Directions from "@/components/Directions";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { WeddingData } from "@/types/wedding";

const data: WeddingData = await fetch(`${process.env.AWS_S3_URL}/1/data.json`, {
  cache: "no-store",
}).then((res) => res.json());

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
            src={data.images.main}
            alt="신랑 신부 웨딩 사진"
            className="w-full shadow-md object-cover"
          />
        </div>
        <div className="flex justify-center font-semibold gap-[10px] text-[1.2rem]">
          <span>{data.coupleInfo.groomName}</span>
          <span>{data.coupleInfo.brideName}</span>
        </div>
        <p className="my-[5px] text-[0.9rem] text-[#333] ">
          {data.weddingInfo.date}
        </p>
        <p className="my-[5px] text-[0.9rem] text-[#333]">
          {data.weddingInfo.venue}
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
      <section className="text-center my-[60px] px-4">
        <div className="flex flex-col">
          <div className="p-[15px] rounded-lg">
            <p className="text-[1.1rem] text-[#444]">
              {data.coupleInfo.groomFather}·{data.coupleInfo.groomMother}의 장남{" "}
              <strong className="font-semibold text-[#222]">
                {data.coupleInfo.groomName}
              </strong>
            </p>
          </div>
          <div className="p-[15px] rounded-lg">
            <p className="text-[1.1rem] text-[#444]">
              {data.coupleInfo.brideFather}·{data.coupleInfo.brideMother}의 사녀{" "}
              <strong className="font-semibold text-[#222]">
                {data.coupleInfo.brideName}
              </strong>
            </p>
          </div>
        </div>
      </section>
      <Gallery images={data.images.gallery} />
      <section className="mt-[60px] px-4">
        <h2 className="font-['Noto_Serif_KR'] text-[1.5rem] text-center mb-[30px] font-medium text-[#555]">
          결혼식 안내
        </h2>

        <div className="flex flex-col gap-[30px] bg-[#f9f9f9] p-5 rounded-lg">
          <div>
            <h3 className="text-[1.1rem] text-[#666] mb-[10px] pb-[5px] border-b border-[#eee]">
              날짜 및 시간
            </h3>
            <p className="my-[5px] text-[1rem] text-[#333]">
              {data.weddingInfo.date}
            </p>
            <p className="my-[5px] text-[1rem] text-[#333]">
              {data.weddingInfo.time}
            </p>
          </div>

          <div>
            <h3 className="text-[1.1rem] text-[#666] mb-[10px] pb-[5px] border-b border-[#eee]">
              장소
            </h3>
            <p className="my-[5px] text-[1rem] text-[#333]">
              {data.weddingInfo.venue}
            </p>
            <p className="my-[5px] text-[1rem] text-[#333]">
              {data.weddingInfo.address}
            </p>
          </div>
        </div>
      </section>
      <Directions {...data.weddingInfo} />
      <Contact contact={data.contact} />
      <BankInfo bankInfo={data.bankInfo} />
      <Footer />
    </div>
  );
}

export default Home;
