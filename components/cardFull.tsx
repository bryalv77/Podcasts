/* eslint-disable @next/next/no-img-element */

import { FC } from 'react'
import {rem} from '../utils';
const Card: FC<{
  name: string, 
  author: string, 
  description: string, 
  image: string
}> = ({name, author, description, image}) => {
  return (
    <>
     <div className="card">
        <img className='card--image' src={image} alt={name} />
        <h4 className='card--title'>{name}</h4>
        <h4 className='card--subtitle'>{`by ${author}`}</h4>
        <p className="card--description">
          <span className='card--description__title'>Description:</span><br /><br />
          {description}
        </p>
      </div>
     <style jsx>{`
         .card {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          max-width: ${rem(280)};
        }
        .card--image {
          border-radius: 0.5rem;
          margin: 1rem;
        }      
        .card--title {
          font-weight: bold;
          margin: 0;
        }
        .card--subtitle {
          font-style: italic;
          font-weight: normal;
          margin-top: 0;
        }
        .card--description {
          margin-top: 0;
          text-decoration: none;
          font-style: italic;
          border-top: 1px solid rgba(0,0,0,0.2);
          padding-top: 1rem;
        }
        .card--description__title {
          font-weight: bold;
          font-style: normal;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  )
}

export default Card;


