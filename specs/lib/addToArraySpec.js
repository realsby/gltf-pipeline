'use strict';
var addToArray = require('../../lib/addToArray');

describe('addToArray', function() {
    it('adds item to array and returns its index', function() {
        var gltf = {
            buffers: []
        };
        var buffer0 = {
            byteLength: 100
        };
        var buffer1 = {
            byteLength: 200
        };
        expect(addToArray(gltf.buffers, buffer0)).toBe(0);
        expect(addToArray(gltf.buffers, buffer1)).toBe(1);
        expect(gltf.buffers).toEqual([buffer0, buffer1]);
    });

    it('returns index of duplicate element when checkDuplicates is true', function() {
        var gltf = {
            buffers: []
        };
        var buffer0 = {
            byteLength: 100
        };
        var buffer1 = {
            byteLength: 200
        };
        expect(addToArray(gltf.buffers, buffer0, true)).toBe(0);
        expect(addToArray(gltf.buffers, buffer1, true)).toBe(1);
        expect(addToArray(gltf.buffers, buffer0, true)).toBe(0);
        expect(gltf.buffers.length).toBe(2);
        expect(addToArray(gltf.buffers, buffer0)).toBe(2);
        expect(gltf.buffers.length).toBe(3);
    });
});
