import { useCallback, useEffect, useRef } from 'react';
import FullScreenButton from 'source/components/core/FullSreenButton';
import Settings from 'source/components/core/Settings';
import { useResize } from 'source/hooks/useResize';

import CarGame from 'source/games/DemoGame2';

const DemoGame2 = () => {
  const container = useRef<HTMLDivElement>(null);
  const game = useRef<CarGame>();

  const insertCanvasGame = useCallback(() => {
    if ( !container.current || container.current.childNodes.length ) return;
    game.current = new CarGame();
    game.current.init();
    container.current.appendChild( game.current.render() );
  }, [container.current])

  useEffect(() => { insertCanvasGame() }, [])

  useResize(() => {
    if ( !game.current ) return;
    game.current.resize();
  });

  return (
    <div>
      <div ref={container} />
      <FullScreenButton />
      <Settings />
    </div>
  )
}

export default DemoGame2;