import BankInfo from "@/components/BankInfo";
import Contact from "@/components/Contact";
import CoupleInfo from "@/components/CoupleInfo";
import Directions from "@/components/Directions";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Invitation from "@/components/Invitation";
import WeddingInfo from "@/components/WeddingInfo";

const weddingData = await fetch(
  `${process.env.AWS_S3_URL}/1/%08weddingData.json`
).then((res) => res.json());

function Home() {
  return (
    <div className="max-w-[500px] mx-auto px-4 font-['Noto_Sans_KR'] text-[#333] bg-white">
      <Header />
      <Invitation mainImage={weddingData.images.main} />
      <CoupleInfo
        groomName={weddingData.groomName}
        groomFather={weddingData.groomFather}
        groomMother={weddingData.groomMother}
        brideName={weddingData.brideName}
        brideFather={weddingData.brideFather}
        brideMother={weddingData.brideMother}
      />
      <Gallery images={weddingData.images.gallery} />
      <WeddingInfo
        date={weddingData.date}
        time={weddingData.time}
        venue={weddingData.venue}
        address={weddingData.address}
      />
      <Directions
        address={weddingData.address}
        transportation={weddingData.transportation}
        parking={weddingData.parking}
      />
      <Contact contact={weddingData.contact} />
      <BankInfo bankInfo={weddingData.bankInfo} />
      <Footer />
    </div>
  );
}

export default Home;
