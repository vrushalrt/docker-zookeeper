const { Kafka } = require("../node_modules/kafkajs")

exports.kafka = new Kafka({
    clientId: "my-app",
    brokers: ['localhost:9092'] 
});
