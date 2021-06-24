import Swordsman from '../Swordsman';

test('Character верны все значения', () => {
    const trueObject = new Swordsman('Kris', "Swordsman");
    expect(trueObject).toEqual({"attack": 40, "defence": 10, "health": 100, "level": 1, "name": "Kris", "type": "Swordsman"});
});