type ActionProps = {
  setActions: React.Dispatch<React.SetStateAction<string[]>>;
  content: string;
};

const Action = ({ setActions, content }: ActionProps) => {
  // callback関数を渡す
  const handleClick = () => {
    setActions(prev => [...prev, content]);
  };

  return (
    <button
      className="w-[80%] h-[3rem] rounded-full text-center bg-[#C2FFBD] shadow-lg text-2xl font-bold leading-[3rem]"
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default Action;
