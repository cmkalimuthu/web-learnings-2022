/*dynamo db operations using aws-sdk
=>npm install aws-sdk
=>documentClient for conversion response of db types to js objects mainly for write and read.
=>client mainly for read and write .for table operations use just dynamoDB
=>promise for avaoiding callback hell and use await/async
=>all are http api calls
*/
const AWS = require("aws-sdk");
const dynamoDB = AWS.DynamoDB(); //
const db = dynamoDB.DocumentClient({
  region: "us-east-1",
});

//table creation @createTable
db.createTable({
  AttributeDefinitions: [
    {
      //like key kali=>{name:"kalimutu",age:"24"},kumar=>{name:"kumar",age:"27",city:"chennai"}
      AttributeName: "id",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "id",
      KeyType: "HASH",
    },
  ],
  BillingMode: "PAY_PER_REQUEST",
  TableName: "my-table",
})
  .promise()
  .then((data) => console.log("success", data))
  .catch(console.error);

//can check the status of active of table once created by describeTable resp.Table.TableStatus

//delete table
db.deleteTable({ TableName: "my-table" })
  .promise()
  .then(() => {
    console.log("table deleted ");
  })
  .catch(console.err);

//list tables in region
db.listTables()
  .promise()
  .then((tables) => console.log(tables));

//db scan to fetch all data
db.scan({ TableName: "my-table" })
  .promise()
  .then((data) => console.log(data.Items));

//to narrow search use filetrExpression and ExpressionAttributeValues
db.scan({
  TableName: "my-table",
  FilterExpression:
    "attribute_not_exists(deletedAt) AND contains(firstname,:firstname)",
  ExpressionAttributeValues: { ":firstname": "john" },
});

//get Item if we known partition key or compositekey(partion+sort)
db.get({ TableName: "my-table", Key: { id: "1" } })
  .promise()
  .then(console.log(data.Item))
  .catch(console.error);

//batch get Item can do bunch of get opertions in single call limited 100 items
db.batchGet({
  RequestItems: {
    "my-table": { Keys: [{ id: "1" }, { id: "2" }] },
    "my-table2": { Keys: [{ name: "kali" }, { name: "kumar" }] },
  },
})
  .promise()
  .then(console.log(data.Responses))
  .catch(console.error);

//put aka write item in table
db.put({
  TableName: "my-table",
  Item: { id: "1", name: "kali", age: "27", city: "madurai" },
})
  .promise()
  .then(console.log(data.Attributes))
  .catch(console.error);

//write or put multiple items and actions in single call using batchWrite
db.batchWrite({
  RequestItems: {
    "my-table": [
      {
        DeleteRequest: {
          Key: { id: "1" },
        },
        PutRequest: {
          Item: {
            id: "3",
            name: "ajith",
            age: "23",
          },
        },
      },
    ],
    "my-table2": [
      {
        PutRequest: {
          Item: {
            id: "3",
            name: "hitesh",
            age: "23",
          },
        },
      },
    ],
  },
})
  .promise()
  .then(console.log(data.Attributes))
  .catch(console.error);

//query to get collection of items sharing same paritionkey if table has compositekey

db.query({
  Table: "my-table",
  KeyConditionExpression: "id= :hashKey and createdAt > :rangeKey",
  ExpressionAttributeValues: {
    ":hashKey": "1",
    ":rangeKey": 20220101, //01-01-2022
  },
})
  .promise()
  .then(console.log(data.Items))
  .catch(console.error);

//they allow to run multiple write operations atomically meaning that either all of operations are executed succesfully or none of them
db.transactWrite({
  TransactItems: [
    {
      //add item to cart
      Put: {
        TableName: "cart-table",
        Item: {
          Key: {
            id: "1",
            count: "1",
          },
        },
      },
      //reduce number of items to buy
      Update: {
        ConditionExpression: "#count > :zeroCount",
        ExpressionAttributeName: { "#count": "count" },
        ExpressionAttributeValues: {
          ":zeroCount": 0,
          ":value": 1,
        },
        Key: {
          id: "1",
        },
        TableName: "ItemsTable",
        UpdateExpression: "set #count = :count- :value",
      },
    },
  ],
}).promise();

//transact read to read in transcation
db.transactRead({
  TransactItems: [
    {
      Get: {
        Key: {
          id: "1",
        },
        TableName: "cart-table",
      },
    },
    {
      Get: {
        Key: {
          id: "3",
        },
        TableName: "data-table",
      },
    },
  ],
}).promise();

//query and scan only give 1mb items to fetch other items use pagination by call again using lastEvalutedkey/exclusiveStartKey
function getAll() {
  let result, accumulated, ExclusiveStartKey;
  do {
    result = db
      .query({
        TableName: "cartTable",
        ExclusiveStartKey,
        Limit: 100,
        KeyConditionExpression: "id = :hashKey and createdAt > :rangeKey",
        ExpressionAttributeValues: {
          ":hasKey": "1",
          ":rangekey": 20220101,
        },
      })
      .promise();
    ExclusiveStartKey = result.LastEvaluatedKey;
    accumulated = [...accumulated, result.Items];
  } while (result.Items.length || result.LastEvaluatedKey);

  return accumulated;
}

getAll().then().catch();

//update on condition
db.update({
  TableName: "cartTable",
  Key: { id: "1" },
  UpdateExpression: "set firstname = :firstname",
  ExpressionAttributeValues: {
    ":firstname": "kali",
    ":companyName": "google",
  },
  ConditionExpression:
    "attribute_not_exists(deletedAt) and company = :companyName",
})
  .promise()
  .then(data.Attributes)
  .catch();

//deleteItem
db.delete({
  TableName: "carTable",
  Key: { id: "1" },
}).promise(data.Attributes);

//for deleteing all use pagination and get all data then call delete for each data .since all atatime is not possible

/*dynamoDb(createTable,keySchema,attributeDefinition,put,get,scan,delete,transactWrite,transactRead,query,batchWrite,batchRead,
updateExpression,ExpressionAttributeName,values,conditionExpression,RequestItems,TransactRequest,LastEvaluatedKey,ExclusiveStartKey,Item,Key,TableName,KeyCoditionExpression)


 */
