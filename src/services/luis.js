'use strict';

const LUISClient = require('luis-client').default;

const agent = require('./http');

const client = new LUISClient({
    appId: 'e9d5cd82-d975-4cd5-a85d-a074f147cef7',
    appKey: 'c0e1fc027eb141d6ad2339c1872bd7a6',
    authoringKey: 'ade07167940048de85cc25c02579086f',
    verbose: 'true',
    region: 'westeurope',
    version: '2.0',
    versionId: '0.1'
}, agent);

/********** PREDICT **************/
const predict = text => client.predict(text);

/********** TRAIN **************/
const startTraining = () => client.startTraining();

const getTrainingStatus = () => client.getTrainingStatus();

/********** INTENTS *************/
const createIntent = intentName => client.createIntent(intentName);

const getIntent = intentId => client.getIntent(intentId);

const renameIntent = (intentId, intentName) => client.renameIntent(intentId, intentName);

const deleteIntent = intentId => client.deleteIntent(intentId);

/********** UTTERANCES/EXAMPLES *************/
const createUtterance = parameters => client.createUtterance(parameters);

const deleteUtterance = utteranceId => client.deleteUtterance(utteranceId);

const getUtterances = (skip, take) => client.getUtterances(skip, take);

/********** ENTITIES *************/
const createEntity = entityName => client.createEntity(entityName);

const getEntity = entityId => client.getEntity(entityId);

const renameEntity = (entityId, entityName) => client.renameEntity(entityId, entityName);

const deleteEntity = entityId => client.deleteEntity(entityId);

module.exports = {
    predict,
    startTraining,
    getTrainingStatus,
    createIntent,
    getIntent,
    renameIntent,
    deleteIntent,
    createUtterance,
    deleteUtterance,
    getUtterances,
    createEntity,
    getEntity,
    renameEntity,
    deleteEntity };