import Card from '../components/Card'

export interface CardProps {
  cards: Card[],
  callback: ()=>void
}
