import { useCallback, useEffect, useRef } from "react";
import FullScreenButton from "source/components/core/FullSreenButton";
import { CaretDown } from "source/components/icons/CaretDown";
import { CaretUp } from "source/components/icons/CaretUp";
import { useResize } from "source/hooks/useResize";

import Game from "source/entities/Game";

import styles from './styles.module.scss';

const DemoGamePage = () => {
  const container = useRef<HTMLDivElement>(null);
  const game = useRef<Game>();

  const insertCanvasGame = useCallback(() => {
    if ( !container.current || container.current.childNodes.length ) return;
    game.current = new Game();
    game.current.init();
    container.current.appendChild( game.current.render() );
  }, [container.current])

  useEffect(() => { insertCanvasGame() }, [])

  useResize(() => {
    if ( !game.current ) return;
    game.current.resize();
  });

  return (
    <div className={styles['game']}>
      <div 
        ref={container}
        className={styles['game__canvas']}
      ></div>
      <div className={styles['game__controls']}>
        <button 
          onClick={() => {}}
          className={styles['control__button']}
        > 
          <CaretUp width={24}/>
        </button>
        <button 
          className={styles['control__button']}
        >
          <CaretDown width={24}/>
        </button>
      </div>
      <FullScreenButton />
    </div>
  );
}

export default DemoGamePage;