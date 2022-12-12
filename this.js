console.log(this);

let person = {
  name: "ron",
  age: 21,
  hobbies: ["guitar", "computer games", "coding"],
  likes: ["books", "movies", "cooking"],
  getHobbies: function () {
    // console.log(this.hobbies);
    this.hobbies.forEach((hobby) => {
      console.log(hobby);
    });
  },
};

console.log(person.getHobbies());
