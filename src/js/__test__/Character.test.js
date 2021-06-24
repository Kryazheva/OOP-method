import Character from '../Character';

test('Character "name" < 2', () => {
   expect(() => {
      new Character('Z', "Bowman");
   }).toThrowError(new Error(`Name не должно быть менее 2 символов и не более 10`))
});

test('Character "name" > 10', () => {
    expect(() => {
       new Character('Zigmigfriddeincshtein', "Bowman");
    }).toThrowError(new Error(`Name не должно быть менее 2 символов и не более 10`))
 });

test('Character "indexOf(type) === false"', () => {
    expect(() => {
       new Character('Kris', "Morgen");
    }).toThrowError(new Error(`нет такого значения`))
 });

 test('Character верны все значения', () => {
    const trueObject = new Character('Kris', "Zombie");
    expect(trueObject).toEqual({"health": 100, "level": 1, "name": "Kris", "type": "Zombie"});
 });

