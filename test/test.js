var assert = require('assert');
let functions = require('../app.js');

describe('testTesting',()=>{
    it('should return 0',()=>{
        assert.equal(functions.nullFunction(),0);
    })
});