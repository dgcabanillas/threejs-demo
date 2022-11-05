import FullScreenButton from 'source/components/core/FullSreenButton';
import styles from './styles.module.scss';

const MainGame = () => {
  return (
    <div className={styles['main-game']}>
      <FullScreenButton />
    </div>
  )
}

export default MainGame;