const app = "I don't do much."
const autobots = [
  { name: 'Optimus Prime', strength: 5, isTransformed: false, },
  { name: 'Ironhide', strength: 3, isTransformed: false, },
  { name: 'Bumblebee', strength: 2.5, isTransformed: false, },
  { name: 'Ratchet', strength: 1.5, isTransformed: false, },
];

const transformedAutobotsWithMap = autobots.map(function(autobot) {
  return Object.assign({}, autobot, { name: "SoCute",
    strength: autobot.strength * 4,
    isTransformed: true,
  });
});

console.log(transformedAutobotsWithMap);


function map(collection, callback) {
  const result = [];

  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    result.push(callback(element, i, collection));
  }

  return result;
}

const transformedAutobots = map(autobots, function (autobot) {
  return Object.assign({}, autobot, {name: "sweetCat",
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});

console.log(transformedAutobots);
