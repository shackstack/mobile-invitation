"use client";

interface ContactInfo {
  groom: string;
  bride: string;
  groomFather: string;
  brideFather: string;
}

interface ContactProps {
  contact: ContactInfo;
}

const Contact = ({ contact }: ContactProps) => {
  return (
    <section className="my-[60px] py-5 border-b border-[#f0f0f0]">
      <h2 className="font-['Noto_Serif_KR'] text-[1.5rem] text-center mb-[30px] font-medium text-[#555]">
        연락처
      </h2>

      <div className="flex flex-col gap-5">
        <div className="bg-[#f9f9f9] p-5 rounded-lg">
          <h3 className="text-center text-[1.1rem] text-[#555] mb-[15px] pb-2 border-b border-[#eee]">
            신랑측
          </h3>
          <div className="flex justify-between items-center py-[10px] border-b border-[#f0f0f0]">
            <p className="text-[0.95rem] text-[#555]">신랑</p>
            <div className="flex gap-2">
              <a
                href={`tel:${contact.groom}`}
                className="inline-block px-3 py-[6px] text-[0.8rem] rounded text-white bg-[#4c8bf5] hover:bg-[#3b7de8] transition-colors duration-200"
              >
                전화
              </a>
              <a
                href={`sms:${contact.groom}`}
                className="inline-block px-3 py-[6px] text-[0.8rem] rounded text-white bg-[#34a853] hover:bg-[#2d9147] transition-colors duration-200"
              >
                문자
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center py-[10px] border-b-0">
            <p className="text-[0.95rem] text-[#555]">신랑 아버지</p>
            <div className="flex gap-2">
              <a
                href={`tel:${contact.groomFather}`}
                className="inline-block px-3 py-[6px] text-[0.8rem] rounded text-white bg-[#4c8bf5] hover:bg-[#3b7de8] transition-colors duration-200"
              >
                전화
              </a>
              <a
                href={`sms:${contact.groomFather}`}
                className="inline-block px-3 py-[6px] text-[0.8rem] rounded text-white bg-[#34a853] hover:bg-[#2d9147] transition-colors duration-200"
              >
                문자
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#f9f9f9] p-5 rounded-lg">
          <h3 className="text-center text-[1.1rem] text-[#555] mb-[15px] pb-2 border-b border-[#eee]">
            신부측
          </h3>
          <div className="flex justify-between items-center py-[10px] border-b border-[#f0f0f0]">
            <p className="text-[0.95rem] text-[#555]">신부</p>
            <div className="flex gap-2">
              <a
                href={`tel:${contact.bride}`}
                className="inline-block px-3 py-[6px] text-[0.8rem] rounded text-white bg-[#4c8bf5] hover:bg-[#3b7de8] transition-colors duration-200"
              >
                전화
              </a>
              <a
                href={`sms:${contact.bride}`}
                className="inline-block px-3 py-[6px] text-[0.8rem] rounded text-white bg-[#34a853] hover:bg-[#2d9147] transition-colors duration-200"
              >
                문자
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center py-[10px] border-b-0">
            <p className="text-[0.95rem] text-[#555]">신부 아버지</p>
            <div className="flex gap-2">
              <a
                href={`tel:${contact.brideFather}`}
                className="inline-block px-3 py-[6px] text-[0.8rem] rounded text-white bg-[#4c8bf5] hover:bg-[#3b7de8] transition-colors duration-200"
              >
                전화
              </a>
              <a
                href={`sms:${contact.brideFather}`}
                className="inline-block px-3 py-[6px] text-[0.8rem] rounded text-white bg-[#34a853] hover:bg-[#2d9147] transition-colors duration-200"
              >
                문자
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
