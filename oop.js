// Constructors

/* Constructors are functions that create new objects.
 They define properties and behaviors that will belong
  to the new object. Think of them as a blueprint for
   the creation of new objects.*/

   function Bird() {
    this.name = "Albert";
    this.color  = "blue";
    this.numLegs = 2;
  }
  let blueBird = new Bird();

  // New operator

/* Notice that the new operator is used when calling a constructor.
 This tells JavaScript to create a new instance of Bird called blueBird.
  Without the new operator, this inside the constructor would not point
   to the newly created object, giving unexpected results. Now blueBird
    has all the properties defined inside the Bird constructor: */

    blueBird.name;
blueBird.color;
blueBird.numLegs;
//Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
blueBird.name;


/* Suppose you were writing a program to keep track of hundreds or even
 thousands of different birds in an aviary. It would take a lot of time
  to create all the birds, then change the properties to different values
   for every one. To more easily create different Bird objects, you can 
   design your Bird constructor to accept parameters: */

   function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }

  /* Then pass in the values as arguments to define each unique bird into the 
  Bird constructor: */ let cardinal = new Bird("Bruce", "red");
  
  /*This gives a new
   instance of Bird with name and color properties set to Bruce and red,
    respectively. The numLegs property is still set to 2. The cardinal has
     these properties: */

cardinal.name
cardinal.color
cardinal.numLegs
/*The constructor is more flexible. It's now possible to define the properties 
for each Bird at the time it is created, which is one way that JavaScript 
constructors are so useful. They group objects together based on shared 
characteristics and behavior and define a blueprint that automates their creation. */


// instanceof method = check if a instance belongs to the constructor, returning true or false 



/* Since he's a particularly happy dog, let's change his name to the string
 Happy Camper. Here's how we update his object's name property:
  ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper";
   Now when we evaluate ourDog.name, instead of getting Camper, 
   we'll get his new name, Happy Camper. */





   
// Using prototype and Object.create


function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype) // Change this line
let beagle = Object.create(Animal.prototype) // Change this line

duck.eat();

beagle.eat();

console.log(duck instanceof Animal);

// returns true

