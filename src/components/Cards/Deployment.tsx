import Card from '../Card'
import deploy from '../../assets/deploy-128.png'


function Deployment(callback: ()=>void) {
    const deployment: Card = {
        name: "Deployments",
        cost: 10,
        icon: deploy,
        quantity: 0,
        callback: callback
    }

    return deployment
}

export default Deployment