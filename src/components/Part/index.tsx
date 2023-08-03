type PartProps = {
  content: string;
  icon: string;
};

const part = ({ content, icon }: PartProps) => {
  return (
    <div className="w-[80%] rounded-full text-center shadow-lg my-2 mx-auto border-[5px] border-[#6DF6D4]">
      <button className="text-2xl font-bold leading-[3rem]">
        <p>{content}</p>
        <img
          src={icon === 'LED' ? '/images/led.png' : icon === 'Cable' ? '/images/cable.png' : '/images/resistance.png'}
          className="w-[2rem] h-[2rem] mx-auto"
        />
      </button>
    </div>
  );
};

export default part;
