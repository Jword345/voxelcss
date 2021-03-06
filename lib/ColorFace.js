/**
 * @module core/ColorFace
 * @requires events
**/
'use strict';

const {assign} = Object;
const {isNumber, isUndefined, hexToRgb, rgbToHex} = require('./common');
const events = require('./events');

module.exports = ColorFace;

/**
 * @name ColorFace
 * @constructor
 * @param {(string|number|object)} data Color data
 * @fires module:core/ColorFace~change
**/
function ColorFace(...args) {
    const color = {r: 0, g: 0, b: 0, a: 1};
    const self = assign(this, events, {
        setColor,
        getColor: () => color,
        getHex: () => rgbToHex(color),
        clone: () => new ColorFace(color),
        serialize: () => JSON.stringify(color)
    });
    setColor(...args);
    function setColor(...setColorArgs) {
        const [firstArgument] = setColorArgs;
        const type = typeof firstArgument;
        let setColorFrom = setColorFromRGBA;
        let data = firstArgument;
        if (arguments.length === 1 && type !== 'number') {
            if (type === 'string') {
                setColorFrom = val => setColor(hexToRgb(val));
            }
        } else {
            const [r, g, b, a] = setColorArgs;
            data = {r, g, b, a};
        }
        setColorFrom(data);
    }
    function setColorFromRGBA(data) {
        const {r, g, b, a} = data;
        if ([r, g, b].every(isNumber)) {
            self.trigger('change', {target: self});
            return assign(color, {r, g, b, a: isNumber(a) ? a : 1});
        } else if ([r, g, b].every(isUndefined)) {
            return color;
        } else {
            throw 'Face color RGB values must be numbers';
        }
    }
}
/**
 * @function loadFromSerial
 * @memberof module:core/ColorFace~ColorFace
 * @param {string} data Serialized data (JSON format string)
 * @returns {module:core/ColorFace~ColorFace} New ColorFace instance
**/
ColorFace.loadFromSerial = function LoadFromSerial(data) {
    const json = JSON.parse(data);
    return new ColorFace(json);
};
