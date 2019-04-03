
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
    return this.store[id] || null;
  }

  find(){
    return Object.values(this.store);  
  }

  findByIdReplace(id, object){
    if(this.findById(id)){
      this.store[id] = { ...object, _id: id };
      return this.store[id];
    } else {
      return null;
    }
  }

  findByIdDelete(id){
    const idToFind = this.store[id];
    delete this.store[id];
    if(idToFind) {
      return idToFind;
    } else {
      return null;
    }
  }

  drop(){
    this.store = {};
  }

}
module.exports = {
  MemoryDatabase };
