

export class SettingsModel {

   constructor() {

   };

   createFieldSquareList() {
      const list = document.createElement("ul");
      const squares = [
         {
            name: "standart", 
            size: "10/10 cells",
            id: 10,
         },
         {
            name: "medium",
            size: "15/15 cells",
            id: 15,
         },
         {
            name: "huge",
            size:"20/20 cells",
            id: 20,
         },
      ];

      for(let square of squares) {
         const listItem = document.createElement("li");
         listItem.id = `${square.id}`;
         listItem.innerText = `${square.name} / ${square.size}`;
         list.appendChild(listItem);
      };

      return list;
   };

   createFleetList() {
      const list = document.createElement("ul");
      const fleet = [
         {
            name: "Destroyer",
            size: 2,
            id: "Destroyer",
         },
         {
            name: "Submarine",
            size: 3,
            id: "Submarine",
         },
         {
            name: "Cruiser",
            size: 3,
            id: "Cruiser",
         },
         {
            name: "Battleship",
            size: 4,
            id: "Battleship",
         },
         {
            name: "Carrier",
            size: 5,
            id: "Carrier",
         },
      ];

      for(let ship of fleet) {
         const listItem = document.createElement("li");
         listItem.id = ship.id;
         listItem.innerText = `${ship.name} / ${ship.size} cells`;
         list.appendChild(listItem);
      };

      return list;
   };

   createField(size) {
      const alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      
      const field = document.createElement("div");
      field.className = "field-wrapper";

      for(let i = 0; i < size + 1; i++) {
         const column = document.createElement("ul");
         column.className = "column";

         if(i === 0) {
            for(let j = 0; j < size + 1; j++) {
               const cell = document.createElement("li");
               cell.className = "cell";

               if(j === 0) {
                  column.appendChild(cell);
               }  else {
                  cell.innerText = j;
                  column.appendChild(cell);
               };
            } ;
         } else {
            for(let j = 0; j < size + 1; j++) {
               const cell = document.createElement("li");
               cell.className = "cell";

               if(j === 0) {
                  cell.innerText = alfabet[i - 1];
                  column.appendChild(cell);
               }  else {
                  column.appendChild(cell);
               };
            };
         };

         field.appendChild(column);
      };

      return field;
   };

};