function loopyLighthouse( range, multiples, words) {
  range = [15, 90];
  multiples = [2, 5];
  words = ["Batty", "Beacon"];
  for (var i = range[0] ; i < range[1] ; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log("BattyBeacon");
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }

}