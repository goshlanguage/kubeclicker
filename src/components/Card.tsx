class Card {
  name: string
  cost: number;
  quantity: number;
  icon: string;
  callback: ()=>void;

  constructor(callback: ()=>void) {
    this.name = "card";
    this.cost = 0;
    this.quantity = 0;
    this.icon = "https://github.com/kubernetes/community/raw/master/icons/png/resources/unlabeled/pod-128.png";
    this.callback = callback
  }

  static update = () => {
    console.log('loop fired')
  }
}

export default Card
