import { FC } from 'react'
import styles from './styles.module.css';

const Loader: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}></div>
    </div>
  )
}

export default Loader;
