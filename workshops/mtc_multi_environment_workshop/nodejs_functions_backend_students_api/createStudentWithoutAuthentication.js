const { CosmosClient } = require("@azure/cosmos");

var endpoint = process.env["CosmosDBEndpoint"];
var key = process.env["CosmosDBAuthKey"];
var databaseName = process.env["DatabaseName"];
var collectionName = process.env["CollectionName"];

const client = new CosmosClient({ endpoint, key });

module.exports = async function (context, req, inputDocument) {
    context.log('Create a student function');
    const { email, name, age, gender, class_type } = req.body;
    
    if (email == null || name == null || age == null || gender == null || class_type == null) {
        console.log("Bad request, please fill all the fields")
        context.res = {
            status: 400,
            body: 'Bad request. Please fill all the fields'
        }
    } else {
        const itemBody = {
            "Email": email,
            "Name": name,
            "Age": age,
            "Gender": gender,
            "Class": class_type
        }

        await client.database(databaseName).container(collectionName).items.upsert(itemBody)
        .then((status) => { 
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: "Student Saved successfully"
            };
        })
        .catch((err) => { 
            context.res = {
                status: 500,
                body: err
            };
        });

    }
};