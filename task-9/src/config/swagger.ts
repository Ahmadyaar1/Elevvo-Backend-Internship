import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Elevvo Product API",
      version: "1.0.0",
      description: "Elevvo Backend Internship - Task 8: API Documentation with Swagger",
      contact: {
        name: "Ahmad Yaar"
      }
    },
    servers: [
      {
        url: "http://localhost:7000",
        description: "Development server"
      }
    ]
  },
  apis: ["./src/app.ts", "./src/controllers/*.ts"]
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;