import { MongoClient} from 'mongodb';

const URL = "mongodb://localhost:27017";

const client = new MongoClient(URL);

console.log("-------------" + client);

const db = client.db("candy");

const shops = db.collection("shops");

console.log(shops);


export default {
  shops: db.collection("shops"),
  candyTypes: db.collection("candy_types")
};