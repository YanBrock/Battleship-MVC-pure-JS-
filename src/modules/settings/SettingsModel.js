//create field size list
//create fleet list
//create player field

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
         medium: {
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

   createFieldSizeList(id) {

      const list = document.createElement("section");
      list.className = "size-list";

      for(let item in this.squares) {
         const listItem = document.createElement("button");
         listItem.id = this.squares[item].id;
         listItem.className = item;
         listItem.innerText = `${this.squares[item].name} - ${this.squares[item].size}`;

         if(id === this.squares[item].id) {
            listItem.classList.add("active");
         }

         list.appendChild(listItem);
      };

      return list;
   };

   createFleetList(fieldType) {
      const list = document.createElement("section");
      list.className = "fleet-list";

      for(let ship in this.fleet[fieldType]) {
         const listItem = document.createElement("button");
         listItem.id = this.fleet[fieldType][ship].id;
         listItem.innerText = `${this.fleet[fieldType][ship].name} (${this.fleet[fieldType][ship].amount}) - ${this.fleet[fieldType][ship].size} cells`;
         list.appendChild(listItem);
      };

      return list;
   };

   createField(fieldSizeId) {
      const alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      
      const field = document.createElement("section");
      field.className = "field";

      for(let i = 0; i < fieldSizeId + 1; i++) {
         const column = document.createElement("ul");
         column.className = "column";

         if(i === 0) {
            for(let j = 0; j < fieldSizeId + 1; j++) {
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
            for(let j = 0; j < fieldSizeId + 1; j++) {
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