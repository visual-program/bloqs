/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../build-utils'),
    StatementInputBloq = require('./../../../statementInputBloq');

/**
 * Bloq name: freakscarIfThereIsALotOfLight
 *
 * Bloq type: Statement-Input
 *
 * Description:
 *
 * Return type: none
 */

var bloqMBotIfThereIsALotOfLight = _.merge(_.clone(StatementInputBloq, true), {

    name: 'freakscarIfThereIsALotOfLight',
    bloqClass: 'bloq-freakscar-color',
    content: [
        [{
            alias: 'text',
            value: 'if'
        }, {
            id: 'OPERATION',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-mbot-ifthereisalotoflight-alot',
                value: '+'
            }, {
                label: 'bloq-mbot-ifthereisalotoflight-low',
                value: '-'
            }, {
                label: 'bloq-mbot-ifthereisalotoflight-operation-nodetect',
                value: '*'
            }]
        }, {
            alias: 'text',
            value: 'with-the'
        }, {
            id: 'LIGHTSENSOR',
            alias: 'dynamicDropdown',
            options: 'lightsensor'
        }]
    ],
    code: '',
    arduino: {
        conditional: {
            aliasId: 'OPERATION',
            code: {
                '+': 'if(¬{LIGHTSENSOR.readSensor} > 250){{STATEMENTS}}',
                '-': 'if((¬{LIGHTSENSOR.readSensor} > 10) && (¬{LIGHTSENSOR.readSensor} <= 250)){{STATEMENTS}}',
                '*': 'if(¬{LIGHTSENSOR.readSensor} <= 10){{STATEMENTS}}'
            }
        }
    }
});

utils.preprocessBloq(bloqMBotIfThereIsALotOfLight);
bloqMBotIfThereIsALotOfLight.connectors[1].acceptedAliases = ['all', 'ifDown'];


module.exports = bloqMBotIfThereIsALotOfLight;