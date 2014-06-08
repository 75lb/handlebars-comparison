"use strict";

/**
Javascript comparison operator helpers for handlebars.
@module
*/
module.exports = function(handlebars){
    handlebars.registerHelper("equal", function(arg1, arg2){
        return arg1 === arg2;
    });
};
