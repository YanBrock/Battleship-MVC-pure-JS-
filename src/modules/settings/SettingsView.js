import { SettingsController } from "./SettingsController.js";


export class SettingsView {

   #title = null;
   #fieldSizeList = null;
   #fleetList = null;
   #field = null;
   #startBtn = null;

   constructor() {
      this.root = document.querySelector("article");
      this.controller = new SettingsController();

      this.#title = document.querySelector(".title");
      this.#title.innerText = "set up your battle!";
   };

   #updateFieldSizeList(id) {
      document.querySelector(".size-list").replaceChildren(this.controller.handleFieldSizeList(id));
   }

   #updateFleetList(fieldType) {
      document.querySelector(".fleet-list").replaceChildren(this.controller.handleFleetList(fieldType));
   }

   #updateField(id) {
      document.querySelector(".field").replaceChildren(this.controller.handleField(id));
   }

   async mount() {
      try {
         let sizeList = await this.controller.handleFieldSizeList(10);

         sizeList.addEventListener("click", (event) => {
            this.#updateFieldSizeList(Number(event.target.id));
            this.#updateFleetList(event.target.className);
            this.#updateField(Number(event.target.id));
         });

         this.root.appendChild(sizeList);

      } catch {
         throw new Error("sizeList");
      } try {

         let fleetList = await this.controller.handleFleetList("standart");

         fleetList.addEventListener("click", (event) => {

         });

         this.root.appendChild(fleetList);

      } catch {
         throw new Error("fleetList");
      } try {

         let playerField = await this.controller.handleField(10);

         playerField.addEventListener("click", (event) => {
            
         });

         this.root.appendChild(playerField);

      } catch {
         throw new Error("playerField");
      }
      

   };

};