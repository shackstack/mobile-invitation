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

const PhoneIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.54833 15.4421C9.05621 16.9506 11.488 19.0847 13.9866 20.3116C16.5293 21.5601 18.5476 21.6258 19.9917 20.1475L19.9977 20.1413L20.0038 20.1352C20.7239 19.4148 21.097 18.9386 21.2191 18.5842C21.2629 18.4573 21.2557 18.3946 21.2433 18.3477C21.2274 18.2875 21.1653 18.1231 20.9021 17.8599C20.4813 17.4389 19.6368 16.8425 18.794 16.3014C18.3199 15.997 17.8388 15.7032 17.3515 15.4203C17.2434 15.358 17.1454 15.2668 17.0136 15.2751C16.9221 15.2808 16.788 15.3195 16.6426 15.4234L16.6229 15.4374L15.135 16.4298C14.7889 16.6816 14.3421 16.9006 13.801 16.9006C13.3058 16.9006 12.9221 16.7021 12.8227 16.6507C12.7625 16.6195 12.7047 16.5832 12.6461 16.5492C11.6807 15.9054 10.7026 15.1454 9.72296 14.1653C8.52763 12.9695 7.76683 11.8815 7.33998 11.241L7.24659 11.08C7.24459 11.076 7.24189 11.0707 7.23857 11.0643C7.18714 10.9648 6.98871 10.581 6.98871 10.0856C6.98871 9.54427 7.20764 9.09734 7.45935 8.75111L7.83905 8.18133C7.84919 8.16612 7.85973 8.15026 7.87066 8.13381C8.02259 7.90524 8.25027 7.56271 8.51113 7.27422C8.59253 7.14303 8.61071 7.0539 8.6138 7.00602C8.61665 6.9617 8.61374 6.87038 8.51387 6.71052C8.19761 6.2043 7.92715 5.67425 7.59329 5.16161C7.05886 4.34099 6.45811 3.50993 6.02984 3.08149L5.98918 3.04081L5.95176 2.99714C5.7966 2.81605 5.69502 2.77401 5.65718 2.76184C4.8904 2.51528 4.19124 3.52581 3.74156 3.99384C2.53289 5.25185 2.4476 7.11956 3.46561 9.5427C4.45635 11.9009 6.24475 14.1842 7.52891 15.423L7.54833 15.4421ZM9.68369 8.21333C9.68369 8.21333 9.28444 8.71259 9.08482 9.01214L8.68555 9.61129C8.38611 10.0107 8.48592 10.2104 8.58574 10.4101C8.98499 11.0092 9.68369 12.0078 10.7816 13.1062C11.68 14.0049 12.5783 14.7038 13.4766 15.303C13.6763 15.4028 13.8759 15.5027 14.2751 15.2031L15.7723 14.2046C16.471 13.7053 17.3694 13.6054 18.0681 14.1047C18.0681 14.1047 20.8629 15.7024 21.9608 16.8008C23.5578 18.3984 22.4599 19.7964 21.0625 21.1944C16.7705 25.5879 9.58388 19.5967 6.48964 16.5012C3.69485 13.8052 -1.19604 6.71552 2.69671 2.92106C3.59504 1.92252 4.29373 1.42325 4.99243 1.3234C5.79094 1.12369 6.48964 1.3234 7.08853 2.02238C8.18648 3.12077 9.7835 5.81683 9.7835 5.91669C10.2826 6.71552 10.1828 7.51435 9.68369 8.21333Z"
        fill="#192435"
      />
    </svg>
  );
};

const SmsIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 7C2.25 4.92893 3.92893 3.25 6 3.25H18C20.0711 3.25 21.75 4.92893 21.75 7V13.8649C21.75 15.9359 20.0711 17.6149 18 17.6149H14.5128C13.96 17.6149 13.4266 17.8183 13.0143 18.1865L9.23634 21.5595C9.01581 21.7564 8.70018 21.8053 8.43035 21.6845C8.16052 21.5637 7.98684 21.2956 7.98684 21V17.8649C7.98684 17.7268 7.87491 17.6149 7.73684 17.6149H6C3.92893 17.6149 2.25 15.9359 2.25 13.8649V7ZM6 4.75C4.75736 4.75 3.75 5.75736 3.75 7V13.8649C3.75 15.1075 4.75736 16.1149 6 16.1149H7.73684C8.70334 16.1149 9.48684 16.8984 9.48684 17.8649V19.325L12.0153 17.0675C12.7025 16.454 13.5915 16.1149 14.5128 16.1149H18C19.2426 16.1149 20.25 15.1075 20.25 13.8649V7C20.25 5.75736 19.2426 4.75 18 4.75H6Z"
        fill="#192435"
      />
    </svg>
  );
};

const Contact = ({ contact }: ContactProps) => {
  return (
    <section className="py-5 px-4">
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
              <a href={`tel:${contact.groom}`}>
                <PhoneIcon />
              </a>
              <a href={`sms:${contact.groom}`}>
                <SmsIcon />
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center py-[10px] border-b-0">
            <p className="text-[0.95rem] text-[#555]">신랑 아버지</p>
            <div className="flex gap-2">
              <a href={`tel:${contact.groomFather}`}>
                <PhoneIcon />
              </a>
              <a href={`sms:${contact.groomFather}`}>
                <SmsIcon />
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
              <a href={`tel:${contact.bride}`}>
                <PhoneIcon />
              </a>
              <a href={`sms:${contact.bride}`}>
                <SmsIcon />
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center py-[10px] border-b-0">
            <p className="text-[0.95rem] text-[#555]">신부 아버지</p>
            <div className="flex gap-2">
              <a href={`tel:${contact.brideFather}`}>
                <PhoneIcon />
              </a>
              <a href={`sms:${contact.brideFather}`}>
                <SmsIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
