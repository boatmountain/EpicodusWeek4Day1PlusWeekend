// epicodusStudent is var.  It is assigne value within {} (known as literal notation)
var epicodusStudent = {
    // multiple key:value pairs (ie: key = firstName, value="Charlie")
    firstName: "Charlie",
    lastName: "Bucket",
    level: 1,
    track: ["PHP","JavaScript","Drupal"],
    enrollmentStatus: true   
  };

//   Here is a var with a property and function, aka a method.  A var is a noun while a method is a verb(for lack of better words)
  var myCat = {
    name: "Kitty Poppins",
    speak: function() {
      console.log("Meow!");
    }
  };

//   To access properties and metods on obj; use either dot notaion or bracket notation
// dot notation
// myCat.name
// "Kitty Poppins"
// >myCat['name']
// // bracket notation
// "Kitty Poppins"
// >myCat.speak()
// Meow!
// >myCat['speak']()
// Meow!

// Create a dog object
var dog = {};

// Give dog properties
dog.name = 'Bark Twain'
dog.age = 5
dog.colors = ["brown", "black", "white"]
console.log(dog);


// use index of colors
console.log(dog.colors[0]);
console.log(dog.colors[1]);

// use method on array
dog.colors.push("gray")

// Review updated dog.colors
console.log(dog.colors);

// Update dog age
dog.age + 10
console.log(dog.age);

// Update dog name
dog.name = 'Rex'
console.log(dog.name);

// Add method to dog
dog.howl = function()  {console.log("Aaaaaaaaaaaoooooooooooooo"); }
console.log(dog.howl);

// Add another method 
dog.humanYears = function() {return this.age * 7}
console.log(dog.humanYears);

// Practice with new object
var flower = {}

// Practice new properties
flower.colors = ["yellow","white", "blue"]
flower.footHeight = 5
flower.pollinators = ["bee", "butterfly", "humming bird", "scientists"]
flower.grow = function() { return this.height + 0.08}
console.log(flower);
flower.wilt = function () {return this.height - 0.16 + this.colors.splice("pink", "white")}
flower.bud = function () {return this.colors.push("pink")}
console.log(flower.grow);
console.log(flower.grow);
console.log(flower.footHeight);

console.log(flower.bud);
console.log(flower);
flower.wilt
console.log(flower);















