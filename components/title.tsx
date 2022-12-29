import Link from 'next/link';
import { useEffect, FC } from 'react'

const Title: FC<{title: string}> = ({title}) => {

  return (
    <>
      <div className='title'>
        <Link href="/" className='link'>
          <span className="title--text">{title}</span>
        </Link>
      </div>
     <style jsx>{`
        .title {
          display: flex;
          font-weight: bold;
          justify-content: flex-start;
          align-items: flex-start;
          font-size: 2rem;
          margin: 1rem 0;
          line-height: 0;
        }
        .title--text {
          color: var(--primary-color);
        }
      `}</style>
    </>
  )
}

export default Title;
