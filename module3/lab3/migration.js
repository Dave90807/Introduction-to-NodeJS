const async = require('async');
const MongoClient = require('mongodb').MongoClient;

const customerData = require('./m3-customer-data.json')
const customerAddresses = require('./m3-customer-address-data.json')

const batch = process.argv[2]
console.log(`batch: ${batch}`);

const taskCount = customerData.length / batch;
console.log(`customerData.length: ${customerData.length}`);
console.log(`taskCount: ${taskCount}`);



const url = 'mongodb://localhost:27017/edx-course-db'



var asyncParallel = function(tasks, callback) {
  var results = [];
  var count = tasks.length;
  tasks.forEach(function(task, index) {
    task(function(err, data) {
      results[index] = data;
      if (err) {
        callback && callback(err);
        callback = null;
      }
      if (--count === 0 && callback) {
        callback(null, results);
      }
    });
  });
};




MongoClient.connect(url, (error, client) => {
  
  console.log('Connecting ...');
  if (error) return process.exit(1);

  console.log('Connection is okay')
  var db = client.db('customerDB'); 
  const collection = db.collection('customers');
  
  collection.insert([
    {jam : 'this is my jam'}
  ], (error, result) => {
    if (error) { 
      console.log('error in insert');
      return process.exit(1);
    }
    console.log('result.result.n :' + result.result.n);
    console.log('result.ops.length: ' + result.ops.length);
  });
  
  let customers = [];
  function newTask(start, end){
    console.log(`start: ${start}, end: ${end}`);
  }

  for (let i=0; i<taskCount; i++){
    customers.push(function(callback){ callback(null,newTask(i*batch, (i+1)*batch-1))});
  }

  asyncParallel(customers, function(err, results) {
    if (err) return console.log(err);
    console.log('Insert data completed');
  });  
  
  client.close();
  
});

