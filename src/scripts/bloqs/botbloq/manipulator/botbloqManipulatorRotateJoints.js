/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
 * Bloq name: botbloqManipulatorRotateJoints
 *
 * Bloq type: Statement
 *
 * Description: Move the joints
 *
 */

var botbloqManipulatorRotateJoints = _.merge(_.clone(StatementBloq, true), {

    name: 'botbloqManipulatorRotateJoints',
    bloqClass: 'bloq-botbloq-manipulator-rotatejoints',
    content: [
        [{
            alias: 'text',
            value: 'Mover la articulación'
        }, {
            id: 'JOINT_NUMBER',
            alias: 'staticDropdown',
            options: [{
                label: '1',
                value: '1'
            }, {
                label: '2',
                value: '2'
            }, {
                label: '3',
                value: '3'
            }]
        }, {
            id: 'DEGREES',
            alias: 'numberInput',
            value: 0
        }, {
            alias: 'text',
            value: 'grados'
        }]
    ],
    code: '',
    python: {
        libraries: ['BotbloqManipulator'],
        needInstanceOf: [{
            name: 'manipulator',
            type: 'BotbloqManipulator'
        }],
        codeLines: [{
            code: 'manipulator.moveJoint({JOINT_NUMBER}, {DEGREES})'
        }]
    }
});

utils.generateBloqInputConnectors(botbloqManipulatorRotateJoints);

module.exports = botbloqManipulatorRotateJoints;