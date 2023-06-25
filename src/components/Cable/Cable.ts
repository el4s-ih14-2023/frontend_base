class Cable {
    private plusTerminal: number[];
    private minusTerminal: number[];

    constructor(plusTerminal: number[], minusTerminal: number[]) {
        this.plusTerminal = plusTerminal;
        this.minusTerminal = minusTerminal;
    }

    getPlusTerminal(): number[] {
        return this.plusTerminal;
    }

    setPlusTerminal(plusTerminal: number[]): void {
        this.plusTerminal = plusTerminal;
    }

    getMinusTerminal(): number[] {
        return this.minusTerminal;
    }

    setMinusTerminal(minusTerminal: number[]): void {
        this.minusTerminal = minusTerminal;
    }
}