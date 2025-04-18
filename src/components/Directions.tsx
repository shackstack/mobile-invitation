"use client";

import { WeddingData } from "@/types/wedding";
import { useEffect } from "react";

const Directions = ({
  address,
  transportation,
  parking,
  coordinates,
}: Pick<
  WeddingData["weddingInfo"],
  "address" | "transportation" | "parking" | "coordinates"
>) => {
  useEffect(() => {
    kakao.maps.load(() => {
      const container = document.getElementById("map");
      if (!container) return;

      const options = {
        center: new kakao.maps.LatLng(
          coordinates.latitude,
          coordinates.longitude
        ),
        level: 5,
        draggable: false,
      };
      new kakao.maps.Map(container, options);
    });
  }, []);

  return (
    <section className="mt-[60px] py-5">
      <h2 className="font-['Noto_Serif_KR'] text-[1.5rem] text-center mb-[30px] font-medium text-[#555]">
        오시는 길
      </h2>

      <div className="mb-[30px]">
        <div className="mb-[15px] w-full h-[300px]">
          <div id="map" className="w-full h-full" />
        </div>

        <div className="my-[15px] text-center">
          <p className="mb-[10px] text-[0.95rem] text-[#555]">{address}</p>
          <a
            href={`https://map.kakao.com/link/map/1799300953`}
            className="p-2 px-4 text-[0.9rem] cursor-pointer transition-all duration-200 hover:bg-[#eee] underline"
          >
            카카오맵에서 열기
          </a>
        </div>
      </div>

      <div className="my-[40px]">
        <h3 className="text-[1.1rem] text-[#555] mb-[15px] text-center">
          대중교통 안내
        </h3>
        <ul className="list-none px-4 m-0">
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
