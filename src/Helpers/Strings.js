export const capitalizeFront = (s) => {
  if (!s) return "";
  return s.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
};

export const padNumber = (n) => {
  if (!Number.isInteger(n)) return "000";
  if (n > 999) return "X" + padNumber(n - 10000);
  let temp = n + 1000;
  return temp.toString().substr(1);
};

export const snakeToSpaced = (s) => {
  let arr = s.split("-");
  arr = arr.map((item) => capitalizeFront(item));
  return arr.join(" ");
};
