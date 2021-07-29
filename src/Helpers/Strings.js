export const capitalizeFront = (s) => {
  return s.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
};

export const padNumber = (n) => {
  let temp = n + 1000;
  return temp.toString().substr(1);
};
