const ftoc = function(fTemp) {
  let cTemp = (fTemp-32) * (5/9);
  return Math.round(cTemp*10) / 10;
};

const ctof = function(cTemp) {
  let ftemp = cTemp * (9/5) + 32;
  return Math.round(ftemp*10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
