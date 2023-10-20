import { useEffect, useState } from 'react'
import kubeLogo from './assets/Kubernetes_logo_without_workmark.svg.png'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [deployments, setDeployments] = useState(0)
  const [duration, setDuration] = useState(1);

  useEffect(() => {
    const timerId = setInterval(() => {
      setDuration((prev) => prev - 1);
      setScore(score + (1 * deployments))
    }, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, [deployments, score, setScore, setDuration]);

  function getCard(score: number) {
    if (score > 9) {
      return (
        <div className="card">
        
        <button onClick={buyDeployment}>
          kubectl apply -f deployment.yaml
        </button>

        {deployments} Deployments
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
  
  function buyDeployment() {
    if (score > 10) {
      setScore(score - 10)
      setDeployments(deployments + 1)
    }
  }

  return (
    <>
      <div id="left">
        <img src={kubeLogo} className="logo" alt="Kube logo" onClick={() => setScore((score) => score + 1)} />
      </div>
      <h1>{Math.round(score)} pods</h1>
      {getCard(score)}
    </>
  )
}

export default App
