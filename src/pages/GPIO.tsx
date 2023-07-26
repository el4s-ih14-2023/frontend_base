import React from 'react';
import GPIOPin from '../components/GPIOPin';

const GPIOPage: React.FC = () => {
    const handleGPIOPinClick = (pinNumber: number) => {
        console.log(`GPIO pin ${pinNumber} clicked!`);

    };

    // 1〜20のピンを上の行に、21〜40のピンを下の行に横並びで配置
    const pins = Array.from({ length: 40 }, (_, index) => {
        const pinNumber = index + 1;
        const top = index < 20 ? 21 : 41;
        const left = (index % 20) * 32 + 120;
        return { pinNumber, position: { top, left } };
    });



    return (
        <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
            <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                <img src="/raspberry-pi.png" alt="Raspberry Pi" style={{ width: '100%', height: 'auto', display: 'block' }} />
                {pins.map(pin => (
                    <GPIOPin key={pin.pinNumber} pinNumber={pin.pinNumber} onClick={handleGPIOPinClick} position={pin.position} />
                ))}
            </div>
        </div>
    );
};

export default GPIOPage;
