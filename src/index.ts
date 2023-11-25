class monoTypeDataStorage<T> {
  private storage: T[] = [];

  addElement(element: T): void {
    this.storage.push(element);
  }

  getAllElements(): T[] {
    return this.storage;
  }
}


const numDataStorage = new monoTypeDataStorage<number>() 

numDataStorage.addElement(12)
numDataStorage.addElement(5)
numDataStorage.addElement(2)
numDataStorage.addElement(1)
console.log(numDataStorage)
console.log(numDataStorage.getAllElements())



// enum Status {
//   dead = "dead",
//   alive = "alive",
//   unknown = "unknown",
// }

// type Power = {
//   powerName: string;
//   powerLevel: number;
//   description: string;
//   weakness: string;
//   usePower: (type: string) => void;
// };

// type Character = {
//   name: string;
//   age: number;
//   power: Power;
// };

// const superMan: Character = {
//   name: "klarkKent",
//   age: 99,
//   power: {
//     powerName: "Cripton",
//     powerLevel: 999,
//     description: "Super power",
//     weakness: "Criptonit",
//     usePower(type) {
//       switch (type) {
//         case "Laser": {
//           console.log("laser");
//           break;
//         }
//         case "Hands": {
//           console.log("Attacked with hands");
//           break;
//         }
//         default:{
//           console.log("you don't have such power")
//         }
//       }
//     },
//   },
// };

// type HeroKey = keyof Character

// function getHeroProp<T extends Character, U extends keyof T>(hero: T,key: U): void{
//      console.log(hero[key])
// }

// superMan.power.usePower("Hand");

// getHeroProp(superMan, "age")
