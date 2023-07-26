import { Cable } from './Cable';

// 使用例:
const plusTerminalCoords = [1, 2, 3];
const minusTerminalCoords = [4, 5, 6];

const cable = new Cable(plusTerminalCoords, minusTerminalCoords);

// console.log(cable.getPlusTerminal()); // 出力: [1, 2, 3]
// console.log(cable.getMinusTerminal()); // 出力: [4, 5, 6]

const newPlusTerminalCoords = [7, 8, 9];
const newMinusTerminalCoords = [10, 11, 12];

cable.setPlusTerminal(newPlusTerminalCoords);
cable.setMinusTerminal(newMinusTerminalCoords);

// console.log(cable.getPlusTerminal()); // 出力: [7, 8, 9]
// console.log(cable.getMinusTerminal()); // 出力: [10, 11, 12]
