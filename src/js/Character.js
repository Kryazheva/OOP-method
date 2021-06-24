'use strict';

export default class Character {
    constructor(name, type) {
       if (name.length < 2 || name.length > 10) {
        throw new Error(`Name не должно быть менее 2 символов и не более 10`)
       } else {
        this.name = name;
       } 
       const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
       if (types.indexOf(type) === -1) {
           throw new Error (`нет такого значения`)
       } else {
           this.type = type;
       }
       this.health = 100;
       this.level = 1;
    }
}