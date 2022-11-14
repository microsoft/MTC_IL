module.exports = async function (context, req, inputDocument) {
    context.log('Get all students.');
    context.log(inputDocument);
 
    context.res = {
        body: inputDocument
    };
}