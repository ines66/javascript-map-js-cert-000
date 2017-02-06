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
