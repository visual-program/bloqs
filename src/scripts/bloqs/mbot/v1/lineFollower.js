/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    OutputBloq = require('./../../outputBloq');

/**
 * Bloq name: mBotLineFollower
 *
 * Bloq type: Output
 *
 *
 *
 * Return type: float
 */

var mBotLineFollower = _.merge(_.clone(OutputBloq, true), {

    name: 'mBotLineFollower',
    bloqClass: 'bloq-mbot-linefollower',
    content: [
        [{
            alias: 'text',
            value: 'bloq-mbot-linefollower-text'
        }, {
            id: 'PORT',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-mbot-port-1',
                value: '1'
            }, {
                label: 'bloq-mbot-port-2',
                value: '2'
            }, {
                label: 'bloq-mbot-port-3',
                value: '3'
            }, {
                label: 'bloq-mbot-port-4',
                value: '4'
            }]
        }]
    ],
    code: '',
    returnType: {
        type: 'simple',
        value: 'float'
    },
    arduino: {
        includes: ['BitbloqMBotOrigin.h'],
        needInstanceOf: [{
            name: 'mBotv1',
            type: 'MBot'
        }],
        setupExtraCode: 'mBotv1.setLineFollowerPort({PORT});',
        code: 'mBotv1.readLineFollowerSensor()'
    }
});
utils.preprocessBloq(mBotLineFollower);

module.exports = mBotLineFollower;