const { gql } = require("apollo-server");

const typeDefs = gql`
    type Article {
        id: ID!
        title: String!
        content: String
    }

    input ArticleInput {
        title: String!
        content: String
    }

    type Query {
        articles: [Article]
        article(id: ID!): Article
    }

    type Mutation {
        createArticle(ArticleInput: ArticleInput): Article
        updateArticle(id: ID!, ArticleInput: ArticleInput): Article
        deleteArticle(id: ID!): Article
    }
`;

module.exports = typeDefs;
