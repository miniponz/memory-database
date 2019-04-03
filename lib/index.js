
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
    return this.store[id];
  }

  find(){
    return Object.values(this.store);  
  }
  
}
module.exports = {
  MemoryDatabase };
