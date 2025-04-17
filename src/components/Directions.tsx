interface DirectionsProps {
  address: string;
  transportation: string[];
  parking: string | null;
}

const Directions = ({ address, transportation, parking }: DirectionsProps) => {
  return (
    <section className="my-[60px] py-5 border-b border-[#f0f0f0]">
      <h2 className="font-['Noto_Serif_KR'] text-[1.5rem] text-center mb-[30px] font-medium text-[#555]">
        오시는 길
      </h2>

      <div className="mb-[30px]">
        <div className="mb-[15px]">
          {/* 카카오맵이나 네이버 지도 API를 활용해 지도를 표시할 수 있습니다 */}
          <img
            src="/images/map.jpg"
            alt="결혼식장 지도"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="my-[15px] text-center">
          <p className="mb-[10px] text-[0.95rem] text-[#555]">{address}</p>
          <button className="bg-[#f5f5f5] border border-[#ddd] rounded p-2 px-4 text-[0.9rem] cursor-pointer transition-all duration-200 hover:bg-[#eee]">
            지도 앱에서 보기
          </button>
        </div>
      </div>

      <div className="my-[30px]">
        <h3 className="text-[1.1rem] text-[#555] mb-[15px] text-center">
          교통 안내
        </h3>
        <ul className="list-none p-0 m-0">
          {transportation.map((item, index) => (
            <li
              key={index}
              className="py-2 border-b border-[#f0f0f0] text-[0.95rem] text-[#666] last:border-b-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {parking && (
        <div className="my-[30px]">
          <h3 className="text-[1.1rem] text-[#555] mb-[15px] text-center">
            주차 안내
          </h3>
          <p className="text-[0.95rem] text-[#666] leading-6">{parking}</p>
        </div>
      )}
    </section>
  );
};

export default Directions;
