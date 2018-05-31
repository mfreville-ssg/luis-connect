// Packages
const express = require('express');
const Validator = require('jsonschema').Validator;
const router = express.Router();

// Services
const {
    predict,
    startTraining,
    getTrainingStatus,
    createIntent,
    getIntent,
    getIntents,
    renameIntent,
    deleteIntent,
    createUtterance,
    createUtterances,
    getUtterances,
    deleteUtterance,
    createEntity,
    getEntity,
    getEntities,
    renameEntity,
    deleteEntity
} = require('../src/services/luis');

// Properties
const v = new Validator();

// Helpers
const { addUtteranceSchema, addUtterancesSchema } = require('../src/helpers/jsonSchema.helper');


// PREDICT
router.get('/predict/:query',(req, res) => {
    return predict(req.params.query)
        .then(response => {
            res.send(response.body);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text);
        })
});

// TRAIN
router.post('/train',(req, res) => {
    return startTraining()
        .then(response => {
            res.send(response.body);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text);
        })
});

router.get('/train',(req, res) => {
    return getTrainingStatus()
        .then(response => {
            res.send(response.body);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text);
        })
});

// INTENTS
router.post('/intents',(req, res) => {
    return createIntent(req.body.query)
        .then(response => {
            res.send(response.body);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text);
        })
});

router.get('/intents/:id',(req, res) => {
    return getIntent(req.params.id)
        .then(response => {
            res.send(response.body);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text);
        })
});

router.get('/intents',(req, res) => {
    return getIntents()
        .then(response => {
            res.send(response.body);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text);
        })
});

router.put('/intents/:id',(req, res) => {
    return renameIntent(req.params.id, req.body.query)
        .then(response => {
            res.send(response.body);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text);
        })
});

router.delete('/intents/:id',(req, res) => {
    return deleteIntent(req.params.id)
        .then(response => {
            res.send(response.body);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text);
        })
});

// UTTERANCES
router.post('/utterance',(req, res) => {
    if (v.validate(req.body, addUtteranceSchema)) {
        return createUtterance(req.body)
            .then(response => {
                res.send(response.body);
            }).catch(error => {
                res.status(error.response.status).send(error.response.text);
            })
    }
});

router.post('/utterances',(req, res) => {
    if (v.validate(req.body, addUtterancesSchema)) {
        return createUtterances(req.body)
            .then(response => {
                res.send(response.body);
            }).catch(error => {
                res.status(error.response.status).send(error.response.text);
            })
    }
});

router.delete('/utterances/:id',(req, res) => {
    return deleteUtterance(req.params.id)
        .then(response => {
            res.send(response.body);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text);
        })
});

/**
 * skip default 0
 * take default 100 (Max 500)
 */
router.get('/utterances/:skip/:take',(req, res) => {
    return getUtterances(req.params.skip, req.params.take)
        .then(response => {
            res.send(response.body);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text);
        })
});

// ENTITIES

router.post('/entities/',(req, res) => {
    return createEntity(req.body.query)
        .then(response => {
            res.send(response.body);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text);
        })
});

router.get('/entities/:id',(req, res) => {
    return getEntity(req.params.id)
        .then(response => {
            res.send(response.body);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text);
        })
});

router.get('/entities',(req, res) => {
    return getEntities()
        .then(response => {
            res.send(response.body);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text);
        })
});

router.put('/entities/:id',(req, res) => {
    return renameEntity(req.params.id, req.body.query)
        .then(response => {
            res.send(response.body);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text);
        })
});

router.delete('/entities/:id',(req, res) => {
    return deleteEntity(req.params.id)
        .then(response => {
            res.send(response.body);
        }).catch(error => {
            res.status(error.response.status).send(error.response.text);
        })
});

module.exports = router;