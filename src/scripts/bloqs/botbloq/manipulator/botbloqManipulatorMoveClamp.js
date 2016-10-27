/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
 * Bloq name: botbloqManipulatorMoveClamp
 *
 * Bloq type: Statement
 *
 * Description: Move the clamp
 *
 */

var botbloqManipulatorMoveClamp = _.merge(_.clone(StatementBloq, true), {

    name: 'botbloqManipulatorMoveClamp',
    bloqClass: 'bloq-botbloq-manipulator-moveclamp',
    content: [
        [{
            id: 'ACTION',
            alias: 'staticDropdown',
            options: [{
                label: 'Abrir',
                value: true
            }, {
                label: 'Cerrar',
                value: false
            }]
        }, {
            alias: 'text',
            value: 'la pinza'
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
            code: 'manipulator.moveClamp({ACTION})'
        }]
    }
});

utils.generateBloqInputConnectors(botbloqManipulatorMoveClamp);

module.exports = botbloqManipulatorMoveClamp;