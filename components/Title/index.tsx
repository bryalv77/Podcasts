import Link from 'next/link';
import { FC } from 'react'
import styles from './styles.module.css';

const Title: FC<{ title: string }> = ({ title }) => (
  <div className={styles.title}>
    <Link href="/" className='link'>
      <span className={styles.text}>{title}</span>
    </Link>
  </div>
)

export default Title;
