# HTTP Request IP parser

Taking a MDN Request object and parses it to find the Client IP.

```
import { getClientIP } from 'http-request-ip';

const ClientIP = getClientIp(request);

```

# Development

## Setting up

Getting up and running

```
yarn install
```

If you want with out updating the yarn.lock file

```
yarn install --frozen-lockfile
```

## Testing

In this project we use Jest as the testing framework, when running tests focus on the logic in the functions not on the testing other libraries.

```
yarn test

```

Monitor testing while making changes can be done using

```
yarn test:watch
```
