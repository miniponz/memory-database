
const { MemoryDatabase } = require('../lib/index.js');

describe('create memory class', () => {
  it('create empty storage', () => {
    const memory = new MemoryDatabase();
    expect(memory.store).toEqual({});
  });

  it('adds an name obj to the store', () => {
    const memory = new MemoryDatabase();
    const obj = { name: 'Superman' };
    const copy = memory.create(obj);
    expect(copy.name).toEqual('Superman');
  });

  test('returns object based on id', () => {
    const memory = new MemoryDatabase();
    const obj = { name: 'Superman' };
    const copy = memory.create(obj);
    expect(memory.findById(copy._id)).toEqual({ ...copy });
  });

  test('returns object based on id', () => {
    const memory = new MemoryDatabase();
    const obj = { name: 'Superman' };
    memory.create(obj);
    expect(memory.findById(2)).toEqual(null);
  });

  test('returns all objects in this.store', () => {
    const memory = new MemoryDatabase();
    const dog = memory.create({ name: 'Ana Dogg' });
    const kitty = memory.create({ name: 'Fat Kitty' });
    expect(memory.find()).toEqual([{ ...dog }, { ...kitty }]);
  });

  test('finds and replaces object by id', () => {
    const memory = new MemoryDatabase();
    const copy = memory.create({ name: 'Superman' });
    let id = copy._id;
    expect(memory.findByIdReplace(id, { name: 'Batman' })).toEqual({ _id:expect.any(String), name: 'Batman' });
  });



});
