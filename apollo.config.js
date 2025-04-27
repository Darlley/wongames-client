module.exports = {
  client: {
    service: {
      name: "my-graphql-service", // Nome do serviço (pode ser qualquer nome)
      url: "http://localhost:1337/graphql", // URL do endpoint GraphQL do Strapi
    },
    includes: ["src/**/*.tsx", "src/**/*.ts"], // Arquivos que contêm operações GraphQL
  },
};
