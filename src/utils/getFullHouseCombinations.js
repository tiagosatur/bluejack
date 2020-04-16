export default function (reorderedUserCards) {
  // create a rank=>card mapping
  const ranks = reorderedUserCards.reduce((ranks, card) => {
    ranks[card.charAt(0)] = ranks[card.charAt(0)]
      ? [...ranks[card.charAt(0)], card]
      : [card];
    return ranks;
  }, {});

  // pick the equally ranked cards by occurrence
  const lengths = Object.values(ranks).reduce((lengths, rank) => {
    lengths[rank.length] = lengths[rank.length]
      ? [...lengths[rank.length], rank]
      : [rank];
    return lengths;
  }, {});

  // get all possible 3-combinations of a 4
  // iterate over all the occurences of 4 we have
  const threesFromFours =
    (lengths[4] &&
      lengths[4].reduce((flat, arr) => {
        // rotate the array 4 times
        const ret = arr.reduce((acc, _, index, four) => {
          const getItemWithModulo = (i) => four[i % four.length];
          // return only 3 items each time
          return [
            ...acc,
            [
              four[index],
              getItemWithModulo(index + 1),
              getItemWithModulo(index + 2),
            ],
          ];
        }, []);
        return [...flat, ...ret];
      }, [])) ||
    [];

  let threes = [...(lengths[3] || []), ...threesFromFours];
  let twos = lengths[2] || [];

  let fullHouseCombos = [];

  threes.map((three) => {
    twos.map((two) => {
      fullHouseCombos.push([...three, ...two]);
    });
  });

  return fullHouseCombos;
}
