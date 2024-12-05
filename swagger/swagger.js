import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import routes from './routes.swagger.js';  // Ajoutez l'extension .js

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Documentation de l\'API',
            contact: {
                name: 'Votre Nom',
                email: 'votre@email.com',
            },
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 3000}`,
                description: 'Serveur de développement',
            },
        ],
        ...routes
    },
    apis: []
};

const specs = swaggerJsdoc(options);

export const serve = swaggerUi.serve;
export const setup = swaggerUi.setup(specs);

export default {
    serve: swaggerUi.serve,
    setup: swaggerUi.setup(specs),
    specs
};