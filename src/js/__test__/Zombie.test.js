import Zombie from '../Zombie';

test('Character верны все значения', () => {
    const trueObject = new Zombie('Kris', "Zombie");
    expect(trueObject).toEqual({"attack": 40, "defence": 10, "health": 100, "level": 1, "name": "Kris", "type": "Zombie"});
});