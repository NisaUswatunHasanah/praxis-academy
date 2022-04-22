function hero(durability, hp, exp, power) {
    this.durability = durability;
    this.hp = hp;
    this.exp = exp;
    this.power = power;
    this.strong = function () {
      return this.durability--;
    };
    this.item = function () {
      return this.hp++;
    };
    this.health = function () {
      return this.exp--;
    };
    this.damage = function () {
      return this.power++;
    };
    this.max = function (a) {
      if (this.strong >= a) {
        //   console.log(a);
        return "hp full";
      } else {
        return "bersihkan lane";
      }
    };
    this.min = function (b) {
      if (this.health >= b) {
        //   console.log(b);
        return "attack";
      } else {
        return "recall";
      }
    };
  }
  let cecillion = new hero(15, 15, 15, 15);
  console.log(cecillion.strong());
  console.log(cecillion.item());
  console.log(cecillion.health());
  console.log(cecillion.damage());
  
  // console.log(cecillion);
  console.log(cecillion.max(cecillion));
  console.log(cecillion.min());
