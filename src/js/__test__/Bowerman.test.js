import Bowerman from '../Bowerman';

test('Character верны все значения', () => {
    const trueObject = new Bowerman('Kris', "Bowman");
    expect(trueObject).toEqual({"attack": 25, "defence": 25, "health": 100, "level": 1, "name": "Kris", "type": "Bowman"});
 });
