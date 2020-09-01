
const sofp = require('sofp-core');

const ExampleBackend = require('sofp-example-backend').SofpExampleBackend;
const ExampleAuthorizationProvider = require('sofp-example-authorizer')

var params = {
  title:         'Example SOFP Server',
  description:   'Example SOFP API Features server',
  serverPort:    3000,
  contextPath:   '/sofp',
  accessLogPath: null,
  backends:      [ExampleBackend],
  authorizerProvider: ExampleAuthorizationProvider.authorizerProvider
}

sofp.run(params);
