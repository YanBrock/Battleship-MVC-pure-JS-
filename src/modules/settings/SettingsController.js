import { SettingsModel } from "./SettingsModel.js";

export class SettingsController {

   #model = null;

   constructor() {

      this.#model = new SettingsModel();

   };

   handleSquareList() {
      return this.#model.createFieldSquareList();
   };

   handleFleetList() {
      return this.#model.createFleetList();
   };

   handleField(size) {
      return this.#model.createField(size);
   }
};