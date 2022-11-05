import classNames from "classnames";
import { useEffect, useState } from "react";
import { Compress } from "source/components/icons/Compress";
import { Expand } from "source/components/icons/Expand";
import styles from './styles.module.scss';

const FullScreenButton = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(!!window.document.fullscreenElement);
  }, [])

  useEffect(() => {
    if ( expanded ) {
      window.document.documentElement.requestFullscreen();
      return;
    } else {
      if ( document.fullscreenElement === null ) return;
      window.document.exitFullscreen();
    }
  }, [expanded])

  const toggleExpand = () => { setExpanded(prev => !prev) }

  return (
    <button 
      className={classNames({
        [styles['fullscreen-button']]: true,
        [styles['fullscreen-button--expanded']]: expanded
      })}
      onClick={toggleExpand}
    >
      {
        expanded 
          ? <Compress height={32}/>
          : <Expand height={32}/>
      }
    </button>
  )
}

export default FullScreenButton;