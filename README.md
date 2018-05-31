# Luis Connect

luis-connect is a sample How To Use the package npm [luis-client][lc1].

Luis Connect contains :
  - Routes with calls to the luis-client sdk
  - A [Postman][post1] export json file to test under ./assets

# Installation

npm
```sh
git clone <this repository>
npm install
npm start
```
yarn
```sh
git clone <this repository>
yarn install
yarn start
```

# Getting Started
You have to create a Luis Application following [Microsoft Documentation][md1].
Once the node server is started, you can set the proxy if needed in your environment variable.

```javascript
process.env.HTTP_PROXY
```

luis.js
```javascript
const LUISClient = require('luis-client').default;
const agent = require('./http');

const client = new LUISClient({
    appId: '<your application id>',
    appKey: '<your application key>',
    authoringKey: '<your authoring key here>',
    verbose: '<true / false>',
    region: '<your region here>',
    version: '<the luis version>',
    versionId: '<your luis app version>'
}, agent);
```
Luis Client parameters
  - appId           : You will find your application ID in your Luis Application Settings
  - appKey          : You will find your application key on the Publish section under Resources and Keys following your region
  - authoringKey    : You will find your authoring key in your Luis user settings
  - verbose         : Check if you need the verbose return from Luis api
  - region          : eastasia, southeastasia, australiaeast, northeurope, westeurope, eastus, eastus2, southcentralus, westcentralus, westus, westus2, brazilsouth. Following [Microsoft Luis Refenrence Regions][mlrr1]
  - version         : Current Luis version 2.0
  - versionId       : You will find your published version on the Publish section of your Luis application

# Test the sample

You can use the postman export file to test the sample.

# Luis Client
You can find the [luis-client repository][lcr1] and the luis-client package on [npm][lc1]


   [lc1]: <https://www.npmjs.com/package/luis-client>
   [post1]: <https://www.getpostman.com/>
   [md1]: <https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-get-started-create-app>
   [mlrr1]: <https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-reference-regions>
   [lcsa1]: <https://westus.dev.cognitive.microsoft.com/docs/services/5890b47c39e2bb17b84a55ff/operations/5890b47c39e2bb052c5b9c2f>
   [lcr1]: <https://github.com/mfreville/luis-client>