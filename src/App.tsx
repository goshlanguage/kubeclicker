import { useState } from 'react'
import kubeLogo from './assets/Kubernetes_logo_without_workmark.svg.png'
import './App.css'

function App() {
  const [score, setScore] = useState(0)

  return (
    <>
      <div id="left">
        <img src={kubeLogo} className="logo" alt="Kube logo" onClick={() => setScore((score) => score + 1)} />
      </div>
      <h1>{score} pods</h1>
      {getCard(score)}
    </>
  )
}

function getCard(score: number) {
  if (score > 10) {
    return (
      <div className="card">
  
      <button>
        kubectl apply -f deployment.yaml
      </button>
    </div>
    )
  }

  if (score > 100) {
    return (
      <div className="card">
  
      <button>
        helm upgrade --install repo/chart -f values.yaml
      </button>
    </div>
    )
  }

  return (
    <div className="card">
      <br />
    </div>
  )
}

export default App
