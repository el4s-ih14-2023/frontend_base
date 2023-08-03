import React, { useState, useEffect } from 'react';
import Actions from './Actions';
import Visual from './Visual';
import Parts from './Parts';
import BreadBoard from './BreadBoard';
import GPIO from './GPIO';

export default function Home() {
  const [actions, setActions] = useState<string[]>([]);

  return (
    <>
      <div className="h-screen flex">
        <div className="w-[50%] h-screen flex">
          <div className="w-[70%] h-screen flex flex-col justify-start items-center">
            <Visual actions={actions} />
          </div>
          <div className="w-[30%] h-screen flex flex-col justify-start items-center">
            <Actions setActions={setActions} />
          </div>
        </div>
        <div className="w-[50%] h-screen flex">
          <div className="w-[20%] h-screen">
            <Parts />
          </div>
          <div className="w-[80%] h-screen flex flex-col justify-between">
            <BreadBoard />
            <GPIO />
          </div>
        </div>
      </div>
    </>
  );
}
