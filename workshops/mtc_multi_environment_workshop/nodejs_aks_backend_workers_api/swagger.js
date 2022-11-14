const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: 'Workers REST API',
    description: 'Workers REST API for AKS microservice'
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/workers.routes.js']

swaggerAutogen(outputFile, endpointsFiles)