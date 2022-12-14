import { useCallback, useEffect, useRef } from 'react';
import FullScreenButton from "source/components/core/FullSreenButton";
import { useResize } from "source/hooks/useResize";

import DemoGame from "source/games/DemoGame";
import styles from './styles.module.scss';

const DemoGamePage = () => {
  const container = useRef<HTMLDivElement>(null);
  const game = useRef<DemoGame>();

  const insertCanvasGame = useCallback(() => {
    if ( !container.current || container.current.childNodes.length ) return;
    game.current = new DemoGame();
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
      <div ref={container} />
      <FullScreenButton />
    </div>
  );
}

export default DemoGamePage;