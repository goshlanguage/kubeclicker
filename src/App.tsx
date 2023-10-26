import { 
  useEffect, 
  useState 
} from 'react'
import {CardProps} from './interfaces/CardProps'
import Deck from './components/Deck'
import Deployment from './components/Cards/Deployment'

import './App.css'
import kubeLogo from './assets/pod-128.png'

function App() {
  const [score, setScore] = useState(0)
  const [, setDuration] = useState(1);
  const [deck, setDeck] = useState<CardProps["cards"]>([]);

  /* main game loop */
  useEffect(() => {
    const timerId = setInterval(() => {
      setDuration((prev) => prev - 1);

      let scoreUpdate = score;

      deck.forEach((card, i) => {
        scoreUpdate = scoreUpdate + (i+(card.quantity/Math.pow(1,i))) 
      })

      update()

      setScore(scoreUpdate)
    }, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, [deck, setDeck, score, setScore, setDuration, update]);

  useEffect(() => {

  }, [score]);

  function click() {
    setScore(score + 1);
    update()
  }

  const handleClick = () => {       
    if (score >= deck[0].cost) {
      const newScore = score - deck[0].cost
      setScore(newScore)

      deck[0].quantity = deck[0].quantity + 1
      deck[0].cost = Math.round(deck[0].cost * (1 + (Math.pow(1, deck[0].quantity))))
      setDeck(deck)
    }
  }

  function update() {
    /* Initial empty deck */
    if (score >= 10 && deck.length == 0) {
      deck.push(Deployment(handleClick))
    } 
    
    if (deck.length > 0) {
      deck[0].callback = handleClick
    }
  }
 
  return (
    <>
      <div id="left">
        <div className="padding-top-20em">

        </div>
        <img src={kubeLogo} className="logo" alt="Kube logo" id="clicker" onClick={click} />
        <h1>{Math.round(score)} pods</h1>
      </div>

      <div id="center">

      </div>

      <div id="right">
        <Deck cards={deck} callback={handleClick} />
      </div>

      <div id="footer">
        v0.0.1 | <a href="https://hartje.io">hartje.io</a> | <a href="https://github.com/goshlanguage/kubeclicker">github</a>
      </div>
    </>
  )
}

export default App
