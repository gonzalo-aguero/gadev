import { useRef, useEffect, useState } from 'react';
import './style.css';

export default function TuringMachine() {
  const LEFT = 'left';
  const RIGHT = 'right';
  const NUMBER_OF_CELLS = 100;
  const INTERVAL_TIME = 500;
  const INPUT = "CODEISLOVE<3";
  const OUTPUT = "CODE=GONZALO";

  let symbolWidth: number;
  let inputSymbolElements: Array<HTMLElement>;
  let currentPosition: number;
  let inputPosition: number;
  let interval: number;
  let running: boolean;

  const container = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLDivElement>(null);
  const [headComponents, setHeadComponents] = useState<Array<HTMLElement>>([]);
  const tapeContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //Obtencion de elementos de head.
    if (head.current) {
      const headSubComponents = Array.from(head.current.children) as Array<HTMLElement>;
      headSubComponents.push(head.current as HTMLElement);
      setHeadComponents(headSubComponents as Array<HTMLElement>);
    }
    inputSymbolElements = [];
    generateTape();

    if (tapeContent.current) {
      symbolWidth = (tapeContent.current.children[0] as HTMLElement).offsetWidth as number;
      tapeContent.current.addEventListener("click", () => {
        if (!running) restart();
      });
    } else symbolWidth = 0;
    currentPosition = 0;
    inputPosition = -1;
    running = true;
    setTapeAt((NUMBER_OF_CELLS / 2) - 1);
    interval = setInterval(moveTapeLogically, INTERVAL_TIME);
  }, []);


  const restart = () => {
    stop();
    if (tapeContent.current) {
      tapeContent.current.style.cursor = "default";
      headComponents.forEach(el => el.style.cursor = "default");
    }
    currentPosition = 0;
    inputPosition = -1;
    running = true;
    setTapeAt((NUMBER_OF_CELLS / 2) - 1);
    interval = setInterval(moveTapeLogically, INTERVAL_TIME);
  }
  const generateTape = () => {
    if (tapeContent.current) {
      let cell: HTMLElement;
      for (let index = 0; index < NUMBER_OF_CELLS / 2; index++) {
        cell = document.createElement("span");
        cell.textContent = "B";
        tapeContent.current.appendChild(cell);
      }

      for (let index = 0; index < INPUT.length; index++) {
        const symbol = INPUT[index];
        cell = document.createElement("span");
        cell.textContent = symbol;
        tapeContent.current.appendChild(cell);
        inputSymbolElements.push(cell);
      }

      for (let index = 0; index < NUMBER_OF_CELLS / 2; index++) {
        cell = document.createElement("span");
        cell.textContent = "B";
        tapeContent.current.appendChild(cell);
      }
    }
  }

  /**
   * Move the head directly to the cell in -position-
   */
  const setTapeAt = (position: number) => {
    if (tapeContent.current) {
      currentPosition = position;
      let newPosition = - currentPosition * symbolWidth;
      tapeContent.current.style.left = `${newPosition}px`;
    }
  }
  // Función para mover la cinta hacia la izquierda o hacia la derecha
  const moveTape = (direction: string) => {
    if (tapeContent) {
      if (direction === LEFT) currentPosition--;
      else currentPosition++;
      setTapeAt(currentPosition);
    }
  }


  const moveTapeLogically = () => {
    if (tapeContent.current) {
      const cell = (tapeContent.current.children[currentPosition] as HTMLElement);
      const symbol = cell.textContent || "B";
      let direction, symbolToInsert;

      if (inputPosition >= INPUT.length) {
        if (symbol === "=") stop();
        else {
          direction = LEFT;
          moveTape(direction);
        }
      } else {
        direction = RIGHT;
        if (INPUT.indexOf(symbol) === 0) inputPosition = 0;
        symbolToInsert = OUTPUT[inputPosition++];
        insertInCell(cell, symbolToInsert || symbol);
        moveTape(direction);
      }
    }
  }
  const insertInCell = (cell: HTMLElement, symbol: string) => {
    cell.textContent = symbol;
  }
  const stop = () => {
      clearInterval(interval);
      running = false;
      if(tapeContent.current){
          tapeContent.current.style.cursor = "pointer";
          headComponents.forEach( el => el.style.cursor = "pointer" );
      }
  }

  return (
    <>
      <div id="turing-machine-container" ref={container} className="turing-machine">
        <div className="tape">
          <div className="head" ref={head}>
            <div className="_1"></div>
            <div className="_2"></div>
          </div>
          <div className="tape-content" ref={tapeContent}></div>
        </div>
      </div>
    </>
  );
}