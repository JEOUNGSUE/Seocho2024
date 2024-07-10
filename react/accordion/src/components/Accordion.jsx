import React, { useState } from "react";

const Accordion = () => {
  const [accorionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accorionOpen)}
        className="flex w-full justify-between"
      >
        <span className="text-lg">모아보기</span>
        {accorionOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid-overflow-hidden text-lg text-slate-600 transition-all duration-300 ease-in-out ${
          accorionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">일일 TODO</div>
        <div className="overflow-hidden">월별 TODO</div>
        <div className="overflow-hidden">완료목록</div>
      </div>
    </div>
  );
};
export default Accordion;
