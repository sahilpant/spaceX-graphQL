import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema.js";
import cors from 'cors';
import path from 'path'

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.use(express.static(path.resolve('client','public')));
app.use(express.static(path.resolve('client','src',)));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client','public','index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}/graphql`));
