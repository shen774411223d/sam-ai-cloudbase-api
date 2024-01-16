exports.main = async (event) => {
    const { value } = event;
    const tcb = require("@cloudbase/node-sdk");
    const app = tcb.init();
    const db = app.database();
    const collection = db.collection("sam-ai");
    const result = await collection
        .where({
            username: value,
        })
        .get();
    return result;
};
