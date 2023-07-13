class TuringMachineAnimationHandler {
    container: HTMLElement;
    tapeContentElement: HTMLElement | null;
    headElement: HTMLElement | null;
    intervalTime: number;
    leftCount: number;
    rightCount: number;

    constructor(container: HTMLElement) {
        this.container = container;
        this.tapeContentElement = this.container.querySelector('.tape-content');
        this.headElement = this.container.querySelector('.tape-content');
        this.intervalTime = 2000;
        this.leftCount = 0;  // Contador de invocaciones con "left"
        this.rightCount = 0; // Contador de invocaciones con "right"
        
        setInterval(this.moveTapeRandomly.bind(this), this.intervalTime);
    }

    // Función para mover la cinta hacia la izquierda o hacia la derecha
    moveTape(direction: 'left' | 'right'): void{
        if(this.tapeContentElement !== null){
            const symbolWidth = (this.tapeContentElement.children[0] as HTMLElement).offsetWidth as number;
            const symbolsCount = this.tapeContentElement.children.length as number;
            const gap = (this.tapeContentElement.offsetWidth - symbolWidth * symbolsCount) / (symbolsCount - 1);
            const currentPosition = this.tapeContentElement.offsetLeft;
            const newPosition = direction === 'left' ? currentPosition + symbolWidth + gap : currentPosition - symbolWidth - gap;
            this.tapeContentElement.style.left = `${newPosition}px`;
        }
    }


    moveTapeRandomly(): void{
        const direction: 'left' | 'right' = Math.random() < 0.5 ? 'right' : 'left';

        if (direction === 'right') {
            this.rightCount++;
            this.leftCount = 0;
        } else {
            this.leftCount++;
            this.rightCount = 0;
        }

        if (this.rightCount >= 3 && this.leftCount > 7) {
            this.moveTape('right');
            this.rightCount = 0;
            this.leftCount = 0;
        } else if (this.leftCount >= 3 && this.rightCount > 7) {
            this.moveTape('left');
            this.rightCount = 0;
            this.leftCount = 0;
        } else {
            this.moveTape(direction);
        }
    }
}