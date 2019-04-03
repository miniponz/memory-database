
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


});
