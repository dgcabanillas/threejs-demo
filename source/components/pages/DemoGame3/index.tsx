import { useEffect, useRef } from 'react';
import FullScreenButton from 'source/components/core/FullSreenButton';
import Settings from 'source/components/core/Settings';
import { useResize } from 'source/hooks/useResize';

import Game from 'source/games/DemoGame3';

const DemoGame2 = () => {
  const container = useRef<HTMLDivElement>(null);
  const test = useRef<Game>();

  useEffect(() => { 
    if ( !container.current || container.current.childNodes.length ) return;

    test.current = new Game();
    test.current.game.init();
    container.current.appendChild( test.current.game.stats.domElement );
    container.current.appendChild( test.current.game.renderer.domElement );
  }, [container.current])

  useResize(() => {
    if ( !test.current ) return;
    test.current.game.resize();
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