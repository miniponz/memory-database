
const uuid = require('uuid/v4');

class MemoryDatabase {
  constructor(){

    this.store = {
    };
  }
   
  create(obj){
    const id = uuid();
    this.store[id] = { ...obj, _id: id };
    return this.store[id];
  }

  findById(id){
    if(this.store[id]){
      return this.store[id];
    } else {
      return null;
    }
  }

  find(){
    return Object.values(this.store);  
  }

  findByIdReplace(id, object){
    this.store[id].name = object.name;
    return this.store[id];
  }
}
module.exports = {
  MemoryDatabase };
