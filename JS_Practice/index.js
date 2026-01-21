const club = {
  name: "Arsenal",
  yearFounded: "1989",
  details() {
    return `Hey, ${this.name} ${this.yearFounded}`;
  },
};

const full = club.details();

console.log(club.details());
console.log("-------------")
console.log(full); 
