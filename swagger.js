const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Articles API',
    version: '1.0.0',
    description: 'This is just a small API to handle articles',
  },
};

const options = {
  swaggerDefinition,
  apis: ['src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
