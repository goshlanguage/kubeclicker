import {FC} from 'react'
import {CardProps} from '../interfaces/CardProps'

const Deck:FC<CardProps> = ({cards}) => {
  return (
    <>
      {cards.map((card, i) => (
        <div className="card" key={i} >
          <div>
            <img src={card.icon} className="cardLogo" onClick={card.callback}/>
          </div>
          <div>
            <p className="cardTitle">
              {card.quantity}
              &nbsp;
              {card.name}
            </p>
            <p>
              Cost: {card.cost}
            </p>
          </div>
        </div>
      ))}
    </>
  )
};

export default Deck;
