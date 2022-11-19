import { SettingsController } from "./SettingsController.js";


export class SettingsView {


   #title = null;

   #fiedSquareList = null;

   #fleetList = null;

   #field = null;

   #startBtn = null;


   constructor() {
      this.root = document.querySelector("article");
      this.controller = new SettingsController();

      this.#title = document.querySelector(".title");
      this.#title.innerText = "set up your battle!";

      this.#fiedSquareList = document.createElement("section");
      this.#fiedSquareList.className = "field-size";

      this.#fleetList = document.createElement("section");
      this.#fleetList.className = "fleet-list";
      

      this.#field = document.createElement("section");
      this.#field.className = "field";

      this.#startBtn = document.createElement("button");
      this.#startBtn.innerText = "start";

      this.#bindListeners();
   };


   #bindListeners() {
      this.#fiedSquareList.addEventListener("click", (event) => {
         this.#updateField(event);
         this.#updateFleetList();
      })
   }

   #onFirstLoad() {
      this.#fiedSquareList.appendChild(this.controller.handleSquareList());
      this.#fleetList.appendChild(this.controller.handleFleetList());
      this.#field.appendChild(this.controller.handleField(10));
   }

   #updateFleetList() {
      const updatedFleetList = this.controller.handleFleetList();
      this.#fleetList.replaceChildren(updatedFleetList);
   }

   #updateField(e) {
      const updatedField = this.controller.handleField(Number(e.target.id));
      this.#field.replaceChildren(updatedField);
   }

   render() {
      this.#onFirstLoad();
      this.root.appendChild(this.#fiedSquareList);
      this.root.appendChild(this.#fleetList);
      this.root.appendChild(this.#field);
   };


};