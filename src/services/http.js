const superagent = require('superagent');
require('superagent-proxy')(superagent)
const agent = superagent.agent();

// set proxy on each request
agent.use((req) => {
    if (process.env.HTTP_PROXY) {
        req.proxy(process.env.HTTP_PROXY);
    }
    return req;
});


module.exports = agent ;