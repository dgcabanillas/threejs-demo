import React from 'react';
import IconButton from 'source/components/base/buttons/IconButton';
import { Setting as SettingIcon } from 'source/components/icons/Setting';
import styles from './styles.module.scss';

const Settings = () => {
  return (
    <>
      <IconButton 
        icon={<SettingIcon />}
        className={styles['settings__button']}
      />
    </>
  )
}

export default Settings;