import items from "./data.json";

export default class request {
   getResources = new Promise((resolve, reject) => {
      setTimeout(() => {
         const data = items.response.map((item) => this._transformItem(item));
			resolve(data);
			reject(new Error("BOOM!!!"));
      }, 1000);
   });

   _transformItem = (item) => {
      return {
         id: item.id,
         title: item.attributes.title,
         first_name: item.relationships.attributes.first_name,
         last_name: item.relationships.attributes.last_name,
         middle_name: item.relationships.attributes.middle_name,
         rooms: item.attributes.rooms,
         area: item.attributes.area,
         unit: item.attributes.unit,
         city: item.attributes.address.city,
         street: item.attributes.address.street,
         house: item.attributes.address.house,
      };
   };
}
