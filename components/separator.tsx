import { FC } from 'react'
import rem from '../utils';

const Separator: FC = () => {

  return (
    <>
     <div className='separator'></div>
     <style jsx>{`
        .separator {
          width: ${rem(1080)};
          height: 1px;
          background-color: var(--primary-color);
          margin: 1rem 0;
        }
        @media (max-width: 1080px) {
          .separator {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default Separator;
