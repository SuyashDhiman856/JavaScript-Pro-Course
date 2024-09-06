const pet = {species: "Dog", Name : "Maxx", age : 1.5};

const key = "species";

pet[true] = "hello";
// pet[true] = 'hello'
// pet["true"] = 'hello'

pet.friends = [];

pet.bark = function(){
    return "WOOF WOOF";
};