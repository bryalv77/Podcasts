import { useEffect, FC } from 'react'

const Title: FC<{title: string}> = ({title}) => {

  return (
    <>
     <div className='title'>{title}</div>
     <style jsx>{`
        .title {
          display: flex;
          font-weight: bold
          justify-content: flex-start;
          align-items: flex-start;
          color: #3e7299;
          font-size: 2rem;
        }
      `}</style>
    </>
  )
}

export default Title;
