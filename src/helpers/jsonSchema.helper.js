const addUtteranceSchema = {
    "type": "object",
    "properties": {
        "text": {
            "type": "string"
        },
        "intentName": {
            "type": "string"
        },
        "entityLabels": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "entityName": {
                        "type": "string"
                    },
                    "startCharIndex": {
                        "type": "integer"
                    },
                    "endCharIndex": {
                        "type": "integer"
                    }
                },
                "required": [
                    "entityName",
                    "startCharIndex",
                    "endCharIndex"
                ]
            }
        }
    }
};

const addUtterancesSchema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "text": {
                "type": "string"
            },
            "intentName": {
                "type": "string"
            },
            "entityLabels": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "entityName": {
                            "type": "string"
                        },
                        "startCharIndex": {
                            "type": "integer"
                        },
                        "endCharIndex": {
                            "type": "integer"
                        }
                    },
                    "required": [
                        "entityName",
                        "startCharIndex",
                        "endCharIndex"
                    ]
                }
            }
        },
        "required": [
            "text",
            "intentName",
            "entityLabels"
        ]
    }
};

module.exports = { addUtteranceSchema };