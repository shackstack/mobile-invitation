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
  const [, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <section className="mt-[60px] py-5 px-4">
      <h2 className="font-['Noto_Serif_KR'] text-[1.5rem] text-center mb-[30px] font-medium text-[#555]">
        마음 전하실 곳
      </h2>

      <div className="flex flex-col gap-[15px]">
        {bankInfo.map((account, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-[#f9f9f9] p-[15px] rounded-lg"
          >
            <div className="flex-1 flex">
              <p className="text-[1rem] font-medium text-[#444] m-0 mb-[5px]">
                {account.owner}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-[0.9rem] text-[#666] m-0 mb-[5px]">
                {account.bank} {account.account}
              </p>
              <svg
                onClick={() => copyToClipboard(account.account, index)}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 16.25C2.5 16.6642 2.83579 17 3.25 17C3.66421 17 4 16.6642 4 16.25L4 3.24999C4 3.11192 4.11193 2.99999 4.25 2.99999L15.25 2.99999C15.6642 2.99999 16 2.6642 16 2.24999C16 1.83578 15.6642 1.49999 15.25 1.49999H4.25C3.2835 1.49999 2.5 2.28349 2.5 3.24999V16.25ZM18.25 20.5H7.75C7.61193 20.5 7.5 20.3881 7.5 20.25L7.5 6.75C7.5 6.61193 7.61193 6.5 7.75 6.5L18.25 6.5C18.3881 6.5 18.5 6.61193 18.5 6.75V20.25C18.5 20.3881 18.3881 20.5 18.25 20.5ZM7.75 22H18.25C19.2165 22 20 21.2165 20 20.25V6.75C20 5.7835 19.2165 5 18.25 5L7.75 5C6.7835 5 6 5.7835 6 6.75L6 20.25C6 21.2165 6.7835 22 7.75 22Z"
                  fill="#192435"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BankInfo;
