"use client";
import { useState } from "react";

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="my-[60px] py-5 border-b border-[#f0f0f0]">
      <h2 className="font-['Noto_Serif_KR'] text-[1.5rem] text-center mb-[30px] font-medium text-[#555]">
        갤러리
      </h2>

      <div className="flex items-center justify-center mb-5">
        <button
          onClick={prevImage}
          className="bg-[rgba(0,0,0,0.1)] text-white border-none rounded-full w-10 h-10 flex items-center justify-center text-[1.2rem] cursor-pointer transition-all hover:bg-[rgba(0,0,0,0.2)]"
        >
          &lt;
        </button>
        <div className="w-full max-w-[400px] h-[300px] mx-[15px] overflow-hidden rounded-lg shadow-md">
          <img
            src={images[currentIndex]}
            alt={`웨딩 갤러리 이미지 ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </div>
        <button
          onClick={nextImage}
          className="bg-[rgba(0,0,0,0.1)] text-white border-none rounded-full w-10 h-10 flex items-center justify-center text-[1.2rem] cursor-pointer transition-all hover:bg-[rgba(0,0,0,0.2)]"
        >
          &gt;
        </button>
      </div>

      <div className="flex justify-center gap-[10px] mt-5">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-[60px] h-[60px] rounded overflow-hidden cursor-pointer transition-all duration-200 
              ${
                index === currentIndex
                  ? "opacity-100 border-2 border-[#4c8bf5]"
                  : "opacity-60 border-2 border-transparent"
              } 
              hover:opacity-90`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image}
              alt={`썸네일 ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
