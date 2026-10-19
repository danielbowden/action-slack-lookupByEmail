const lookupUser = require('./lookupUser');

import('@actions/core').then(core => lookupUser(core));
