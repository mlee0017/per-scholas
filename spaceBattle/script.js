// there are six alien ships
// the alien ships attack one at a time 
// our ship gets to attack first 
// must attack aliens in order
// after attacking you have the option to make a hasty retreat


// game round
// 1. attack the first alien ship
// 2. if alien ship survives, it attacks you
// 3. if you survive, you attack the ship again
// 4. if alien ship survives, it attacks you again 
// 5. if you destroy the ship, you have the option to attack the next alien ship or retreat
// 6. you win if you destroy all aliens
// 7. you lose if you're destroyed

// ship properties 
// hull is the same as hitpoints if it reaches 0 or less, you dead
// 
class Ship {
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

}
// instantiate our ship 
const ussAssembly = new Ship (20, 5, .7)

const alienShipArr = []
for(let i = 0; i <= 6; i++){
    hull = randomNumber
    firepower = randomNumber
    accuracy = randomNumber
}