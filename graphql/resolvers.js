const Article = require("../model/article");

const resolvers = {
    Query: {
        articles: async () => {
            try {
                return await Article.find({});
            } catch (error) {
                console.error("Error fetching articles:", error);
                throw new Error("Failed to fetch articles");
            }
        },
        article: async (parent, args) => {
            try {
                return await Article.findById(args.id);
            } catch (error) {
                console.error("Error fetching article:", error);
                throw new Error("Failed to fetch article");
            }
        },
    },
    Mutation: {
        createArticle: async (parent, args) => {
            try {
                const article = new Article(args.ArticleInput);
                return await article.save();
            } catch (error) {
                console.error("Error creating article:", error);
                throw new Error("Failed to create article");
            }
        },
        updateArticle: async (parent, args) => {
            try {
                return Article.findByIdAndUpdate(args.id, args.ArticleInput, { new: true })
            } catch (error) {
                console.error("Error creating article:", error);
                throw new Error("Failed to create article");
            }
        },
        deleteArticle: async (parent, args) => {
            try {
                return Article.findByIdAndDelete(args.id)
            } catch (error) {
                console.error("Error creating article:", error);
                throw new Error("Failed to create article");
            }
        },
    },
};

module.exports = resolvers;
