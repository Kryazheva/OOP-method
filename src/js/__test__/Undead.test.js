import Undead from '../Undead';

test('Character верны все значения', () => {
    const trueObject = new Undead('Kris', "Undead");
    expect(trueObject).toEqual({"attack": 25, "defence": 25, "health": 100, "level": 1, "name": "Kris", "type": "Undead"});
});