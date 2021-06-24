import Daemon from '../Daemon';

test('Character верны все значения', () => {
    const trueObject = new Daemon('Kris', "Daemon");
    expect(trueObject).toEqual({"attack": 10, "defence": 40, "health": 100, "level": 1, "name": "Kris", "type": "Daemon"});
});