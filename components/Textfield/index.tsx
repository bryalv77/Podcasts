import { FC } from 'react'
import styles from './styles.module.css';

const Textfield: FC<{
  onChange: (e: any) => void,
  onKeyUp?: (e: any) => void,
  value: string,
  placeholder: string
}> = ({
  onChange,
  onKeyUp,
  value,
  placeholder
}) => (
    <input
      placeholder={placeholder}
      className={styles.textfield}
      type="text"
      onChange={onChange}
      value={value}
      onKeyUp={onKeyUp}
    />
  )

export default Textfield;
