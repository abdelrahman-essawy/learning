let createPlanet = (...args) => new Planet(...args);

class World {
    constructor(galaxyName) {
        this.galaxyName = galaxyName;
    }
}
class SolarSystem extends World {
    constructor(galaxyName, mainStarName, positionInGalaxy) {
        super(galaxyName)
        this.mainStarName = mainStarName
        this.positionInGalaxy = positionInGalaxy
    }
}
class Planet extends SolarSystem {
    constructor(galaxyName, mainStarName, positionInGalaxy, planetName, gasesNames, liquidsNames) {
        super(galaxyName, mainStarName, positionInGalaxy)
        this.planetName = planetName
        this.gasesNames = gasesNames
        this.liquidsNames = liquidsNames
    }
    hasLife = () => this.gasesNames.includes('Oxgyen') && this.liquidsNames.includes('Water');
    printGases = () => this.gasesNames.forEach(gasName => {
        console.log(gasName);
    });
}


let earth = createPlanet('The Milky Way', 'The Sun', 'Outer Side Of Galaxy', 'The Earth', ['Argon', 'Oxgyen', 'Nitrogen'], ['Water']);

console.log(earth)
console.log(`Does it has life? : `, earth.hasLife());
earth.printGases()