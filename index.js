const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const PORT = 4000;
const DB_URL = "mongodb://localhost:27017/GraphQL";

mongoose
    .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.error("Database connection failed:", err));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
    }),
});

server
    .listen(PORT)
    .then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    })
    .catch((err) => {
        console.error("Failed to start server:", err);
    });
