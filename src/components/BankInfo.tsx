"use client";
import { useState } from "react";

interface BankAccount {
  owner: string;
  bank: string;
  account: string;
}

interface BankInfoProps {
  bankInfo: BankAccount[];
}

const BankInfo = ({ bankInfo }: BankInfoProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <section className="my-[60px] py-5 border-b border-[#f0f0f0]">
      <h2 className="font-['Noto_Serif_KR'] text-[1.5rem] text-center mb-[30px] font-medium text-[#555]">
        마음 전하실 곳
      </h2>

      <div className="flex flex-col gap-[15px]">
        {bankInfo.map((account, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-[#f9f9f9] p-[15px] rounded-lg"
          >
            <div className="flex-1">
              <p className="text-[1rem] font-medium text-[#444] m-0 mb-[5px]">
                {account.owner}
              </p>
              <p className="text-[0.9rem] text-[#666] m-0 mb-[5px]">
                {account.bank}
              </p>
              <p className="text-[0.95rem] text-[#333] m-0">
                {account.account}
              </p>
            </div>
            <button
              className={`py-2 px-[14px] text-[0.85rem] rounded transition-all duration-200
                ${
                  copiedIndex === index
                    ? "bg-[#ff69b4] text-white border border-[#ff69b4] hover:bg-[#ff1493]"
                    : "bg-[#f5f5f5] text-[#555] border border-[#ddd] hover:bg-[#eee]"
                }`}
              onClick={() => copyToClipboard(account.account, index)}
            >
              {copiedIndex === index ? "복사완료" : "복사하기"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BankInfo;
