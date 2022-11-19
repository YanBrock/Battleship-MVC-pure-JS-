

export class SettingsModel {

   constructor() {
      this.chosenFleet = null;

      this.fleet = {
         standart: {
            destroyer: {
               name: "Destroyer",
               size: 2,
               id: "Destroyer",
               amount: 1,
            },
            submarine: {
               name: "Submarine",
               size: 3,
               id: "Submarine",
               amount: 1,
            },
            cruiser: {
               name: "Cruiser",
               size: 3,
               id: "Cruiser",
               amount: 1,
            },
            battleship: {
               name: "Battleship",
               size: 4,
               id: "Battleship",
               amount: 1,
            },
            carrier: {
               name: "Carrier",
               size: 5,
               id: "Carrier",
               amount: 1,
            },
         },
         medium: {
            destroyer: {
               name: "Destroyer",
               size: 2,
               id: "Destroyer",
               amount: 3,
            },
            submarine: {
               name: "Submarine",
               size: 3,
               id: "Submarine",
               amount: 2,
            },
            cruiser: {
               name: "Cruiser",
               size: 3,
               id: "Cruiser",
               amount: 2,
            },
            battleship: {
               name: "Battleship",
               size: 4,
               id: "Battleship",
               amount: 1,
            },
            carrier: {
               name: "Carrier",
               size: 5,
               id: "Carrier",
               amount: 1,
            },
         },
         big: {
            destroyer: {
               name: "Destroyer",
               size: 2,
               id: "Destroyer",
               amount: 4,
            },
            submarine: {
               name: "Submarine",
               size: 3,
               id: "Submarine",
               amount: 3,
            },
            cruiser: {
               name: "Cruiser",
               size: 3,
               id: "Cruiser",
               amount: 3,
            },
            battleship: {
               name: "Battleship",
               size: 4,
               id: "Battleship",
               amount: 2,
            },
            carrier: {
               name: "Carrier",
               size: 5,
               id: "Carrier",
               amount: 1,
            },
         },
      };

      this.squares = {
         standart: {
            name: "Standart", 
            size: "10x10 cells",
            id: 10,
         },
         mediun: {
            name: "Medium",
            size: "15x15 cells",
            id: 15,
         },
         big: {
            name: "Big",
            size:"20x20 cells",
            id: 20,
         },
      };
   };

   createFieldSquareList() {
      const list = document.createElement("ul");

      for(let item in this.squares) {
         const listItem = document.createElement("li");
         listItem.id = `${this.squares[item].id}`;
         listItem.innerText = `${this.squares[item].name} - ${this.squares[item].size}`;
         list.appendChild(listItem);
      };

      this.chosenFleet = {...this.fleet.standart};

      return list;
   };

   createFleetList() {
      const list = document.createElement("ul");

      for(let ship in this.chosenFleet) {
         const listItem = document.createElement("li");
         listItem.id = this.chosenFleet[ship].id;
         listItem.innerText = `${this.chosenFleet[ship].name} (${this.chosenFleet[ship].amount}) - ${this.chosenFleet[ship].size} cells`;
         list.appendChild(listItem);
      };

      return list;
   };

   createField(squareId) {
      if(squareId === 10) {
         this.chosenFleet = {...this.fleet.standart};
      } else if(squareId === 15) {
         this.chosenFleet = {...this.fleet.medium};
      } else {
         this.chosenFleet = {...this.fleet.big};
      };

      const alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      
      const field = document.createElement("div");
      field.className = "field-wrapper";

      for(let i = 0; i < squareId + 1; i++) {
         const column = document.createElement("ul");
         column.className = "column";

         if(i === 0) {
            for(let j = 0; j < squareId + 1; j++) {
               const cell = document.createElement("li");
               cell.className = "cell";

               if(j === 0) {
                  column.appendChild(cell);
               }  else {
                  cell.innerText = j;
                  column.appendChild(cell);
               };
            };
         } else {
            for(let j = 0; j < squareId + 1; j++) {
               const cell = document.createElement("li");

               if(j === 0) {
                  cell.innerText = alfabet[i - 1];
                  column.appendChild(cell);
               }  else {
                  cell.id = `${alfabet[i]}${j}`;
                  column.appendChild(cell);
               };

               cell.className = "cell";
            };
         };

         field.appendChild(column);
      };

      return field;
   };

};