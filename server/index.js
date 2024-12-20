import express from "express";
import { ApolloServer } from "apollo-server-express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url"; // Import fileURLToPath

import { resolvers } from "./graphql/resolvers/resolver.js";

// Convert import.meta.url to a directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files (like your resume) from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

const typeDefs = fs.readFileSync(
  path.join(__dirname, "graphql/schemas/schema.graphql"),
  "utf-8"
);

// GraphQL server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

server.start().then(() => {
  server.applyMiddleware({ app, path: "/graphql", cors: true });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`GraphQL Server is running at http://localhost:${port}`);
});
