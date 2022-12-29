import { FC } from 'react'
import styles from './styles.module.css';
import Separator from '../Separator';
import Title from '../Title';

const Nav: FC<{ title: string, isLoading: boolean }> = ({ title, isLoading }) => {

  return (
    <>
      <div className={styles.nav}>
        <Title title={title} />
        {
          isLoading && <div className={styles.loader}></div>
        }
      </div>
      <Separator />
    </>
  )
}

export default Nav;
