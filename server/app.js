/* globals Locations */
'use strict';

var locationsData = [
{ name: "Львів" },
{ name: "Київ" },
{ name: "Одеса" },
{ name: "Харків" },
{ name: "Тернопіль" },
{ name: "Чернівці" },
{ name: "Луцьк" },
{ name: "Cуми"},
{ name: "Житомир" },
{ name: "Дніпропетровськ" }
];

Meteor.startup(function () {
    if (Locations.find().count() === 0) {
        _.each(databaselocations, function (location) {
            location._id = new Mongo.ObjectID();

            Locations.insert(location);
        });
    }
});
