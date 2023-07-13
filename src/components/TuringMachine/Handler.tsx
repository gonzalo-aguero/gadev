class TuringMachineAnimationHandler {
    container: HTMLElement;
    headComponents: NodeListOf<HTMLElement>;
    tapeContentElement: HTMLElement | null;
    headElement: HTMLElement | null;
    symbolWidth: number;
    inputSymbolElements: Array<HTMLElement>;
    currentPosition: number;
    inputPosition: number;
    interval: number;
    running: boolean;

    readonly LEFT = 'left';
    readonly RIGHT = 'right';
    readonly NUMBER_OF_CELLS = 100;
    readonly INTERVAL_TIME = 500;
    readonly INPUT = "CODEISLOVE<3";
    readonly OUTPUT = "CODE=GONZALO";

    constructor(container: HTMLElement) {
        this.container = container;
        this.tapeContentElement = this.container.querySelector('.tape-content');
        this.headComponents = this.container.querySelectorAll("head, .head ._1, .head ._2");
        this.headElement = this.container.querySelector('.tape-content');
        
        this.inputSymbolElements = [];
        this.generateTape();

        if(this.tapeContentElement !== null){
            this.symbolWidth = (this.tapeContentElement.children[0] as HTMLElement).offsetWidth as number;
            this.tapeContentElement.addEventListener("click", ()=>{
                if(!this.running) this.restart();
            });
        }else this.symbolWidth = 0;

        this.currentPosition = 0;
        this.inputPosition = -1;
        this.running = true;
        this.setTapeAt((this.NUMBER_OF_CELLS / 2) - 1);
        this.interval = setInterval(this.moveTapeLogically.bind(this), this.INTERVAL_TIME);
    }

    restart(): void{
        this.stop();
        if(this.tapeContentElement){
            this.tapeContentElement.style.cursor = "default";
            this.headComponents.forEach( el => el.style.cursor = "default" );
        }
        this.currentPosition = 0;
        this.inputPosition = -1;
        this.running = true;
        this.setTapeAt((this.NUMBER_OF_CELLS / 2) - 1);
        this.interval = setInterval(this.moveTapeLogically.bind(this), this.INTERVAL_TIME);
    }
    generateTape(): void{
        if(this.tapeContentElement !== null){
            let cell: HTMLElement;
            for (let index = 0; index < this.NUMBER_OF_CELLS / 2; index++) {
                cell = document.createElement("span");
                cell.textContent = "B";
                this.tapeContentElement.appendChild(cell);
            }
            
            for (let index = 0; index < this.INPUT.length; index++) {
                const symbol = this.INPUT[index];
                cell = document.createElement("span");
                cell.textContent = symbol;
                this.tapeContentElement.appendChild(cell);
                this.inputSymbolElements.push(cell);
            }
            
            for (let index = 0; index < this.NUMBER_OF_CELLS / 2; index++) {
                cell = document.createElement("span");
                cell.textContent = "B";
                this.tapeContentElement.appendChild(cell);
            }

            console.log(this.tapeContentElement.children)
        }
    }

    /**
     * Move the head directly to the cell in -position-
     */
    setTapeAt(position: number){
        if(this.tapeContentElement !== null){
            this.currentPosition = position;
            let newPosition = - this.currentPosition * this.symbolWidth;
            this.tapeContentElement.style.left = `${newPosition}px`;
        }
    }
    // Función para mover la cinta hacia la izquierda o hacia la derecha
    moveTape(direction: string): void{
        if(this.tapeContentElement !== null){
            if(direction === this.LEFT) this.currentPosition--;
            else this.currentPosition++;
            this.setTapeAt(this.currentPosition);
        }
    }


    moveTapeLogically(): void{
        const cell = (this.tapeContentElement?.children[this.currentPosition] as HTMLElement);
        const symbol = cell.textContent || "B";
        let direction, symbolToInsert;
        
        if(this.inputPosition >= this.INPUT.length){
            if(symbol === "=") this.stop();
            else{
                direction = this.LEFT;
                this.moveTape(direction);
            }
        }else{
            direction = this.RIGHT;
            if(this.INPUT.indexOf(symbol) === 0) this.inputPosition = 0;
            symbolToInsert = this.OUTPUT[this.inputPosition++];
            this.insertInCell(cell, symbolToInsert || symbol);
            this.moveTape(direction);
        }
    }
    insertInCell(cell: HTMLElement, symbol: string){
        cell.textContent = symbol;
    }
    stop(): void{
        clearInterval(this.interval);
        this.running = false;
        if(this.tapeContentElement){
            this.tapeContentElement.style.cursor = "pointer";
            this.headComponents.forEach( el => el.style.cursor = "pointer" );
        }
    }
}

export default TuringMachineAnimationHandler;