class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }
  attack(target) {
    target.resilience -= this.power;
    console.log(`${this.name} attacked ${this.name} for ${this.power}! Ouch!`);
  }
}

class Effect extends Card {
  constructor(name, cost, text, stats, magnitude) {
    super(name, cost);
    this.text = text;
    this.stats = stats;
    this.magnitude = magnitude;
  }
  play(target) {
    if (target instanceof Unit) {
      target[this.stats] += this.magnitude;
      console.log(`${this.name} was played on ${target.name}`);
      console.log(this.text);
    } else {
      throw new Error("You must target a unit!");
    }
  }
}

const redNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgorithm = new Effect(
  "Hard Algorithm",
  2,
  "Increase target's resilience by 3",
  "resilience",
  3
);
const promiseRejection = new Effect(
  "Unhandled Promise Rejection",
  1,
  "Reduce target's resilience by 2",
  "resilience",
  -2
);
const pairProgramming = new Effect(
  "Pair Programming",
  3,
  "increase target's power by 2",
  "power",
  3
);

hardAlgorithm.play(redNinja);
promiseRejection.play(redNinja);
pairProgramming.play(redNinja);
redNinja.attack(blackNinja);
