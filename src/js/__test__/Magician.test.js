import Magician from '../Magician';

test('Character верны все значения', () => {
    const trueObject = new Magician('Kris', "Magician");
    expect(trueObject).toEqual({"attack": 10, "defence": 40, "health": 100, "level": 1, "name": "Kris", "type": "Magician"});
});