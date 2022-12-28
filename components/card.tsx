/* eslint-disable @next/next/no-img-element */

import { FC } from 'react'
const Card: FC<{title: string, description: string, image: string}> = ({title, description, image}) => {
  return (
    <>
     <div className="card">
        <img className='card--image' src={image} alt={title} />
        <h3 className='card--title'>{title}</h3>
        <p className="card--subtitle">Author: {description}</p>
      </div>
     <style jsx>{`
         .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .card--image {
          border-radius: 50%;
        }      
        .card--title {
          font-weight: bold;
          color: #000000;
          text-decoration: none;
          text-transform: uppercase;
          text-align: center;
        }
        .card--subtitle {
          color: #a1a1a1;
          text-align: center;
          margin-top: 0;
        }
      `}</style>
    </>
  )
}

export default Card;


