"use strict";

function safePawns(data) {
    data = data.map(function(item) {
        let res = [];
        res.push(item.charCodeAt(0) - 'a'.charCodeAt(0));
        res.push(parseInt(item[1]));
        return res;
    });
	console.log(data);    
    let ans = 0;
    for (let xy of data) {
        if (data.indexOf([xy[0] - 1, xy[1] - 1]) !== -1 || data.indexOf([xy[0] + 1, xy[1] - 1]) !== -1) {
            ans += 1;
        }
		console.log(xy);
    }
    return ans
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]), 6, "First");
    assert.equal(safePawns(["b4", "c4", "d4", "e4", "f4", "g4", "e5"]), 1, "Second");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

