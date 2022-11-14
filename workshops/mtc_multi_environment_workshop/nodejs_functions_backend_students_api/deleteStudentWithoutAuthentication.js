const { CosmosClient } = require("@azure/cosmos");

var endpoint = process.env["CosmosDBEndpoint"];
var key = process.env["CosmosDBAuthKey"];
var databaseName = process.env["DatabaseName"];
var collectionName = process.env["CollectionName"];

const client = new CosmosClient({ endpoint, key });

module.exports = async function (context, req, inputDocument) {
    context.log('deleteStudent function.');

    if(inputDocument.length != 0)
    {
        const itemBody = {
            "Email": req.query.email,
            "id": inputDocument[0].id
        }
        
        await client.database(databaseName).container(collectionName).item(itemBody.id, itemBody.email).delete(itemBody)
        .then((status) => { 
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: "Student deleted successfully"
            };
        })
        .catch((err) => { 
            context.res = {
                status: 500,
                body: err
            };
        });        
    }
    else
    {
        context.res = {
            status: 404,
            body: "Student not found"
        };
    }
};