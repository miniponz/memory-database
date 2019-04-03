
const { MemoryDatabase } = require('../lib/index.js');

describe('create memory class', () => {
  let memory = null;
  beforeEach(() => {
    memory = new MemoryDatabase();
  });

  it('create empty storage', () => {
    expect(memory.store).toEqual({});
  });

  it('adds an name obj to the store', () => {
    const obj = { name: 'Superman' };
    const copy = memory.create(obj);
    expect(copy.name).toEqual('Superman');
  });

  test('returns object based on id', () => {
    const obj = { name: 'Superman' };
    const copy = memory.create(obj);
    expect(memory.findById(copy._id)).toEqual({ ...copy });
  });

  test('returns object based on id', () => {
    const obj = { name: 'Superman' };
    memory.create(obj);
    expect(memory.findById(2)).toEqual(null);
  });

  test('returns all objects in this.store', () => {
    const dog = memory.create({ name: 'Ana Dogg' });
    const kitty = memory.create({ name: 'Fat Kitty' });
    expect(memory.find()).toEqual([{ ...dog }, { ...kitty }]);
  });

  test('finds and replaces object by id', () => {
    const copy = memory.create({ name: 'Superman' });
    let id = copy._id;
    expect(memory.findByIdReplace(id, { name: 'Batman' })).toEqual({ _id:expect.any(String), name: 'Batman' });
  });

  test('find object by id and delete', () => {
    const copy = memory.create({ name: 'yer mom' });
    let id = copy._id;
    expect(memory.findByIdDelete(id)).toEqual({ ...copy });
  });

  test('drop clears storage', () => {
    memory.create({ name: 'hungry hippo' });
    memory.drop();
    expect(memory.store).toEqual({});
  });

});
