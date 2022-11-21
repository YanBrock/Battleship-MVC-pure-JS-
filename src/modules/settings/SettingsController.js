import { SettingsModel } from "./SettingsModel.js";

export class SettingsController {

   #model = null;

   constructor() {

      this.#model = new SettingsModel();

   };

   handleFieldSizeList(id) {;
      return this.#model.createFieldSizeList(id);
   };

   handleFleetList(fieldType) {
      return this.#model.createFleetList(fieldType);
   };

   handleField(fieldSizeId) {
      return this.#model.createField(fieldSizeId);
   }
};