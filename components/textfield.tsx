import { FC } from 'react'

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
  <>
    <input 
      placeholder={placeholder}
      className="textfield"
      type="text"
      onChange={onChange}
      value={value}
      onKeyUp={onKeyUp} 
    />
    <style jsx>{`
      .textfield {
        background-color: #FFF;
        border: 1px solid var(--primary-color);
        font-size: 1rem;
        padding: 0.5rem;
        margin: 0.5rem;
        border-radius: 0.5rem;
      }
    `}</style>
  </>
)

export default Textfield;
