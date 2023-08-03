import React from 'react';

type VisualProps = {
  actions: string[];
};

const Visual = ({ actions }: VisualProps) => {
  return (
    <>
      {actions.map((action, index) => (
        <div
          key={index}
          className="w-[80%] h-[3rem] rounded-full text-center bg-[#C2FFBD] shadow-lg text-2xl font-bold leading-[3rem]"
        >
          {action}
        </div>
      ))}
    </>
  );
};

export default Visual;
