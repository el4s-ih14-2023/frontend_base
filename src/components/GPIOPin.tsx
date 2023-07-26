// import React from 'react';

// interface GPIOPinProps {
//     pinNumber: number;
//     onClick: (pinNumber: number) => void;
//     position: { top: number, left: number };
// }

// const GPIOPin: React.FC<GPIOPinProps> = ({ pinNumber, onClick, position }) => {
//     return (
//         <button
//             style={{
//                 width: '20px',
//                 height: '20px',
//                 borderRadius: '50%',
								
//                 fontSize: '8px',
//                 position: 'absolute',
//                 top: position.top,
//                 left: position.left
//             }}
//             onClick={() => onClick(pinNumber)}
//         >
//             {pinNumber}
//         </button>
//     );
// };

// export default GPIOPin;


import React from 'react';

type GPIOPinProps = {
    pinNumber: number,
    onClick: (pinNumber: number) => void,
    position: {
        top: number,
        left: number
    }
}

const GPIOPin: React.FC<GPIOPinProps> = ({ pinNumber, onClick, position }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: `${position.top}%`,
                left: `${position.left}px`,
                width: '28px',
                height: '28px',
                //border: '1px solid black',
                borderRadius: '50%',
                cursor: 'pointer'
            }}
            onClick={() => onClick(pinNumber)}
        ></div>
    );
};

export default GPIOPin;
