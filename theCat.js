var randomnumber=Math.floor(Math.random()*6);

var Cat = {
    tiredness: 7,
    hunger: 12,
    lonliness: 6,
    happiness: 9,

    sleep: function(numMinutes) {
        //console.log();
        for (var i = 0; i <numMinutes; i++) {
            console.log('z');
        this.tiredness= this.tiredness-randomnumber;
        }
    },

    feed: function(numKibbles) {
        for (var i = 0; i < numKibbles; i++) {
            console.log('nom');
            this.hunger--;
        }
        if (randomnumber % 2 === 0) {
            console.log("Cat gets mad at you and eats your face");
        }
        else {
            console.log("Cat asks for pets.");
        }
    },

    pet: function(numPets) {
        for (var i = 0; i < numPets; i++) {
            console.log('purr');
            this.lonliness++;
            this.happiness++;
        }
    }
};

Cat.sleep(5);
console.log(Cat.tiredness);
Cat.feed(10);
console.log(Cat.hunger);
Cat.pet(4);
console.log(Cat.lonliness);
console.log(Cat.happiness);


