import { FC } from 'react'

const Loader: FC = () => {
  return (
    <>
     <div className='wrapper'>
      <div className="spinner"></div>
     </div>
     <style jsx>{`
        .wrapper {
          position: absolute;
          top: calc(50% - 25px);
          left: calc(50% - 25px);
        }
        .spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #3e7299;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  )
}

export default Loader;
