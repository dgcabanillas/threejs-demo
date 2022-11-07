import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface IProps {
  icon?: ReactNode,
  className?: string,
  onClick?: () => void
}

const IconButton = ({ icon, className, onClick = () => {} }: IProps) => {
  return (
    <button 
      className={classNames({
        [styles['icon-button']]: true,
        [`${className}`]: !!className
      })}
      onClick={onClick}
    >
      { icon }
    </button>
  )
}

export default IconButton;