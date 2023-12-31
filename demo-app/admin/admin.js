
const { kafka } = require("../client/client")

async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting...");
    admin.connect();
    console.log("Adming Connection Success...");
  
    console.log("Creating Topic [rider-status]");
    await admin.createTopics({
      topics: [
        {
          topic: "rider-status",
          numPartitions: 2,
        },
      ],
    });
    console.log("Topic Created Success [rider-status]");
  
    console.log("Disconnecting Admin..");
    await admin.disconnect();
  }
  
  init();