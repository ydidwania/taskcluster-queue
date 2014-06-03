var base        = require('taskcluster-base');
var path        = require('path');

suite('validate', function() {
  // Run test cases using schemas testing utility from taskcluster-base
  base.testing.schemas({
    validator: {
      folder:       path.join(__dirname, '..', 'schemas'),
      constants:    require('../schemas/constants')
    },
    basePath:       path.join(__dirname, 'validate_test'),
    schemaPrefix:   'http://schemas.taskcluster.net/',
    cases: [
      {
        schema:   'queue/v1/task-failed-message.json#',
        path:     'task-failed-with-run-message.json',
        success:  true,
      }, {
        schema:   'queue/v1/task-failed-message.json#',
        path:     'task-failed-message.json',
        success:  true,
      }, {
        schema:   'queue/v1/task-pending-message.json#',
        path:     'task-pending-message.json',
        success:  true,
      }, {
        schema:   'queue/v1/task-status.json#',
        path:     'task-status.json',
        success:  true,
      }
    ]
  });
});