/* global Locations, accountsUIBootstrap3*/
'use strict';

var persons = [
'Назар', 
'Дмитро', 
'Сергій', 
'Олексій', 
'Павло', 
'Петро', 
'Іван', 
'Стас',
'Володя',
'Аня',
'Катя',
'Оля'



];

accountsUIBootstrap3.setCustomSignupOptions = function () {
    return {
        profile: {
            location: Locations.findOne()._id,
            name: persons[Math.floor(Math.random() * persons.length)]
        }
    };
};
