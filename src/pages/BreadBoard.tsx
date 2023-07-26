import { NextPage } from 'next';
import { useState } from 'react';

const BreadBoard: NextPage = () => {
  // エリアA カラム数
  const columnA = 12;
  // エリアA ロウリスト
  const rowLists = ['e', 'd', 'c', 'b', 'a'];
  // エリアB 1ブロックカラム数
  const inColumnB = 5;
  // エリアB　カラム数
  const columnB = 2;
  // エリアB　ロウ数
  const rowB = 2;

  // エリアA座標
  //   const [positionA, setPositionA] = useState([99, 99]);
  // エリアB座標
  //   const [positionB, setPositionB] = useState([99, 99]);

  // 座標格納
  const [position, setPosition] = useState([
    [99, 99, 99],
    [99, 99, 99],
  ]);
  // ポジション初期値
  const defaultPosition = [99, 99, 99];

  //   座標取得メソッド
  const getPosition = (column: number, row: number, area: number) => {
    // area == 0 の場合　エリアAの座標
    // area == 1 の場合　エリアBの座標

    if (position[0] == defaultPosition) {
      setPosition([
        [column, row, area],
        [column, row, area],
      ]);
    } else {
      setPosition([[column, row, area], position[0]]);
    }
    console.log(position);
  };

  // エリアA 穴ハンドラー
  const handleHoleAClick = (column: number, row: number) => {
    // setPositionA([column, row]);
    // getPosition(positionA);

    // 配列３つ目は、エリアAを表す
    getPosition(column, row, 0);
  };

  // エリアB 穴ハンドラー
  const handleHoleBClick = (column: number, row: number) => {
    // setPositionB([column, row]);
    // getPosition(positionB);

    // 配列３つ目は、エリアBを表す
    getPosition(column, row, 1);
  };

  // エリアA 穴 レイアウト
  const holeA = (column: number, row: number) => {
    return (
      <div className="w-[1.5rem] h-[1.5rem] flex justify-center items-center my-[.2rem]">
        <button
          id={'areaA_' + String(column) + String(row)}
          onClick={() => handleHoleAClick(column, row)}
          className={`border-2 w-[1rem] h-[1rem] active:bg-black`}
        ></button>
      </div>
    );
  };

  // エリアB 穴 レイアウト
  const holeB = (column: number, row: number) => {
    return (
      <div className="w-[1.5rem] h-[1.5rem] flex justify-center items-center my-[.2rem] mx-[.4rem]">
        <button
          id={'areaB_' + String(column) + String(row)}
          onClick={() => handleHoleBClick(column, row)}
          className={`border-2 w-[1rem] h-[1rem] focus:bg-black`}
        ></button>
      </div>
    );
  };

  // エリアA 1ブロック レイアウト
  const holeBlockA = (columnIndex: number) => {
    const blocks = [];
    for (let i = 0; i < rowLists.length; i++) {
      blocks.push(holeA(columnIndex, rowLists.length - i - 1));
    }
    return (
      <>
        {blocks.map((block, index) => (
          <div key={index} className="flex flex-col">
            {block}
          </div>
        ))}
      </>
    );
  };

  // エリアA 穴 全体レイアウト
  const holeAreaA = () => {
    const columnHoles = [];
    for (let i = 1; i < columnA + 1; i++) {
      columnHoles.push(holeBlockA(i));
    }
    return columnHoles.map((columnHole, index) => (
      <div key={index} className="flex flex-col">
        {columnHole}
      </div>
    ));
  };

  // エリアB ブロック レイアウト
  const holeRowBlockB = (rowIndex: number) => {
    const blocks = [];

    for (let i = 0; i < inColumnB * columnB; i++) {
      blocks.push(holeB(i, rowIndex));
    }

    return (
      <>
        {blocks.map((block, index) => (
          <div key={index} className={`flex justify-center ${inColumnB / index == 1 ? 'ml-[1rem]' : ''}`}>
            {block}
          </div>
        ))}
      </>
    );
  };

  // エリアB 穴 全体レイアウト
  const holeAreaB = () => {
    const rowHoles = [];
    for (let i = 0; i < rowB; i++) {
      rowHoles.push(holeRowBlockB(i));
    }

    return (
      <div className="flex flex-col justify-around items-center w-full py-[5px]">
        <div className="w-[93.5%] border-b-2 ml-[2rem] border-[#00f]"></div>
        {rowHoles.map((row, index) => (
          <div key={index} className="flex justify-around">
            {row}
          </div>
        ))}
        <div className="w-[93.5%] border-b-2 ml-[2rem] border-[#f00]"></div>
      </div>
    );
  };

  // 列番 レイアウト
  const columnNum = () => {
    let columns = [];
    for (let i = 0; i < columnA; i++) {
      columns.push(i + 1);
    }
    return columns.map((column, index) => (
      <span className="w-[1.5rem] text-center" key={index}>
        {column}
      </span>
    ));
  };

  return (
    <>
      <div className="w-screnn h-screen flex justify-center items-center">
        {/* ブレッドーボード基盤 */}
        <div className="w-[30rem] h-[20rem] border-2 border-[#ccc] bg-slate-50 shadow-lg flex flex-col items-center justify-center">
          {/* エリア A */}
          <div className="w-full h-[70%] px-[1rem] pt-[1rem] pb-[.5rem] flex flex-col justify-around items-center">
            {/* 穴レイアウト */}
            <div className="flex w-full">
              {/* 行アルファベット */}
              <div className="flex flex-col w-[2rem] mr-[.2rem]">
                {rowLists.map((row, index) => (
                  <span key={index} className="text-center py-[.2rem]">
                    {row}
                  </span>
                ))}
              </div>
              {/* 穴の野郎ども */}
              <div className="flex w-full justify-around">{holeAreaA()}</div>
            </div>
            {/* 列番 */}
            <div className="flex justify-around w-full pl-[2rem]">{columnNum()}</div>
          </div>
          {/* 区切り線 */}
          <div className="border-[#ccc] border-b-2 w-full"></div>
          {/* エリア B */}
          <div className="w-full h-[30%] flex">
            <div className="w-[4rem] flex flex-col justify-around items-center">
              <span className="text-[#00f] text-[1.5rem]">ー</span>
              <span className="text-[#f00] text-[1.5rem]">+</span>
            </div>
            {holeAreaB()}
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadBoard;
