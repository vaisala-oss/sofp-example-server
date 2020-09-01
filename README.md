# SOFP Example Server

This is an example assemly of the SOFP server. It uses the example backend (https://github.com/vaisala-oss/sofp-example-backend) and example authorizer (https://github.com/vaisala-oss/sofp-example-authorizer).


## Example requests

Alice (only allowed to see temperature measurements):

`wget -O- --quiet --header="X-User: alice" 'http://localhost:3000/sofp/collections/forecast/items?f=json'`

Bob (only allowed to see humidity measurements):

`wget -O- --quiet --header="X-User: bob" 'http://localhost:3000/sofp/collections/forecast/items?f=json'`

401 Unauthorized:

`wget 'http://localhost:3000/sofp/collections/forecast/items?f=json'`
