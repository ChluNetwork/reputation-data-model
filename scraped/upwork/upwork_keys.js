var fs = require('fs');
var _ = require('lodash');
var jsonSchemaGenerator = require('json-schema-generator');

var data = JSON.parse(fs.readFileSync('./upwork.json', 'utf8'));

var keys = [];

schemaObj = jsonSchemaGenerator(data.assignmentsInProgress);
console.log(schemaObj);

// _.forEach(data.assignmentsInProgress, function(review) {
//   for(var key in review){
//     keys.push({key: key, type: typeof(review[key])});
//   }
// });

// _.forEach(data.assignmentsEnded, function(review) {
//   for(var key in review){
//     keys.push({key: key, type: typeof(review[key])});
//   }
// });

// _.forEach(data.assignmentsEnded.assignments, function(review) {
//   for(var key in review){
//     keys.push({key: key, type: typeof(review[key])});
//   }
// });

// keys = _.uniqBy(keys, 'key');

console.log(keys);
