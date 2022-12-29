import { useEffect, FC } from 'react'

const Title: FC<{title: string}> = ({title}) => {

  return (
    <>
     <div className='title'>{title}</div>
     <style jsx>{`
        .title {
          display: flex;
          font-weight: bold;
          justify-content: flex-start;
          align-items: flex-start;
          color: var(--primary-color);
          font-size: 2rem;
          margin: 1rem 0;
          line-height: 0;
        }
      `}</style>
    </>
  )
}

export default Title;
