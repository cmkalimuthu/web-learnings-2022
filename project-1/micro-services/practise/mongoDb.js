/*
service mogodb start
service mongodb stop
mongo
db.help() to check all commands
db.stat() detail about current instance
flexible schema documents
*/

//embeded data model(de-normalized)
const obj = {
  _id: "",
  Emp_ID: "10025AE336",
  Personal_Deatils: {
    firstName: "kali",
    lastname: "muthu",
    dobb: "25-02-1999",
  },
  Contact: {
    email: "cmkali@gmail.com",
    phone: "123456789",
  },
  Address: {
    city: "bangluru",
    state: "karnataka",
    country: "India",
  },
};

//normalized data model separe docs connecting with docId
Employee = {
  _id: "obj123",
  Emp_ID: "10025AE336",
};
Personal_Deatils = {
  _id: "obj124",
  empDocID: "obj123",
  firstName: "kali",
  lastname: "muthu",
  dobb: "25-02-1999",
};

/*use db
show dbs
to show atleast insert one collection else it wont show the created db
default database is test db by mongodb
db.dropDatabase() if not it will del the test db
db.createCollection(name,options) options {max ,size,auto index id,capped}
show collections
db.newCollection.insert({"name":"kali"}) it will create collection automaticaly if you insert
db.newCollection.drop() to delete the collection
data types for key string,integer,boolean,arrays,object(embeded doc),object id(12 bytes (4time+3achineid+2processId+3inc)),double,timestamp,date,null,code,binaryrehular exp,min/max
can insert array of doc's too db.mycoll.insert([{},{}])
db.mycol.save(doc) same as insert if you are not mentioning _id in doc else it will overite the content by save content
after insertion will get objectId as response 
insertOne({}) for only one doc
insertMany([]) array of docs
db.mycol.find().pretty() shows all docs in structured way
db.mycol.findOne() only one doc

find({name:"kali"}) like where name="kali"
find({age:{$gt:50}}) where age > 50
find({age:{$lt:50}}) where age < 50
lte,gte,ne,in,nin
find({age:{$in:[18,25,30]}})age btw or in 
find({age:{$nin:[18,25,30]}})age not btw or in 
find({$and:[{Bookname:"life"},{by:"kali"}]}) AND for two conditions
find({$or:[{Bookname:"life"},{by:"kali"}]}) AND for two conditions
find({{age:{$gt:18}},$or:[{Bookname:"life"},{by:"kali"}]}) AND OR together conditions where a>18 and bookname =life or by=kali
find({$nor:[{Bookname:"life"},{by:"kali"}]}) not of these / expect these
find({age:{$not:{$gt:18}}}) age not greater than 18

update and save updates the doc where update updates value in existing document where save replace the existing with passed doc

db.mycol.update(selction_criteria,updationdata)
db.mycol.update({name:"kali",{$set:{name:"kalimuthu"}}) update only one
db.mycol.update({name:"kali",{$set:{name:"kalimuthu"},{multi:true}}) for multi
db.mycol.findOneAndUpdate({name:"kali",{$set:{name:"kalimuthu",age:"23"}}) 
db.mycol.updateMany({age:{$gt:50}},{$set:{age:00}}) 

db.mycol.remove({age:"20"},1) if del number is not mentioned in second param then it wlll del whole collections like truncate

find({age:{$lt:50}},{name:1,id:0}) limits what field should it show 1 true 0 false 
find({age:{$lt:50}},{name:1,id:0}).limit(1) limits how many doc should show
find({age:{$lt:50}},{name:1,id:0}).limit(1).skip(1) limits how many doc should show same as limit
find({age:{$lt:50}},{name:1,id:0}).sort(!) sort ascending is 1 and descending is -1 def 1

Indexes are special data structures, that store a small portion of the data set in an easy-to-traverse form
The index stores the value of a specific field or set of fields, ordered by the value of the field as specified in the index.
db.mycol.creatIndex({name:1,age:-1}) i asc -1 desc
db.mycol.dropIndex({name:1})
db.mycol..dropIndexes() del all index
db.mycol.getIndexes()

Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result.
ddb.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}} returns 
{ "_id" : "tutorials point", "num_tutorial" : 2 }
{ "_id" : "Neo4j", "num_tutorial" : 1 }

Replication
    A cluster of N nodes
    Any one node can be primary
    All write operations go to primary
    Automatic failover
    Automatic recovery
    Consensus election of primary
mongod --port 27017 --dbpath "D:\set up\mongodb\data" --replSet rs0
It will start a mongod instance with the name rs0, on port 27017.
Now start the command prompt and connect to this mongod instance.
In Mongo client, issue the command rs.initiate() to initiate a new replica set.
To check the replica set configuration, issue the command rs.conf(). To check the status of replica set issue the command rs.status().
>rs.add("mongod1.net:27017")
To check whether you are connected to primary or not, issue the command db.isMaster() in mongo client.

sharding
Sharding is the process of storing data records across multiple machines and it is MongoDB's approach to meeting the demands of data growth. 
As the size of the data increases, a single machine may not be sufficient to store the data nor provide an acceptable read and write throughput. 
Sharding solves the problem with horizontal scaling. With sharding, you add more machines to support data growth and the demands of read and write operations.
In replication, all writes go to master node
Latency sensitive queries still go to master
Single replica set has limitation of 12 nodes
Memory can't be large enough when active dataset is big
Local disk is not big enough
Vertical scaling is too expensive
Shards − Shards are used to store data. They provide high availability and data consistency. In production environment, each shard is a separate replica set.
Config Servers − Config servers store the cluster's metadata. This data contains a mapping of the cluster's data set to the shards. The query router uses this metadata to target operations to specific shards. In production environment, sharded clusters have exactly 3 config servers.
Query Routers − Query routers are basically mongo instances, interface with client applications and direct operations to the appropriate shard. The query router processes and targets the operations to shards and then returns results to the clients. A sharded cluster can contain more than one query router to divide the client request load. A client sends requests to one query router. Generally, a sharded cluster have many query routers.

To create backup of database in MongoDB, you should use mongodump command. This command will dump the entire data of your server into the dump directory.
The command will connect to the server running at 127.0.0.1 and port 27017 and back all data of the server to directory /bin/dump/. Following is the output of the command 
mongodump --host HOST_NAME --port PORT_NUMBER (all dbs of mongo instance)
mongodump --dbpath DB_PATH --out BACKUP_DIRECTORY (specifc db)
mongodump --collection COLLECTION --db DB_NAME (specific collection)
To restore backup data MongoDB's mongorestore command is used. This command restores all of the data from the backup directory.

*/
