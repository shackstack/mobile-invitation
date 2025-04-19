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
    <section className="my-[60px] py-5">
      <div className="flex items-center justify-center mb-5">
        <svg
          onClick={prevImage}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white" />
          <path
            d="M15 20.5L6 12L15 3.5"
            stroke="#2A2A2E"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>

        <div className="w-full max-w-[400px] h-[300px] mx-[15px] overflow-hidden rounded-lg shadow-md">
          <img
            src={images[currentIndex]}
            alt={`웨딩 갤러리 이미지 ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </div>
        <svg
          onClick={nextImage}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white" />
          <path
            d="M9 20.5L18 12L9 3.5"
            stroke="#2A2A2E"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>
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
