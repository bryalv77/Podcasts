import { FC } from 'react'

const Separator: FC = () => {

  return (
    <>
     <div className='separator'></div>
     <style jsx>{`
        .separator {
          width: 100%;
          height: 1px;
          background-color: #3e7299;
          margin: 1rem 0;
        }
      `}</style>
    </>
  )
}

export default Separator;
