module.exports = async function (context, req, inputDocument) {
    context.log('Get student function');

    if (req.query.email) {
        context.res = {
            body: inputDocument
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass email on the query string"
        }
    }
}