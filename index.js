import express from 'express';
import graphqlHTTP from 'express-graphql';

const app = express();
const PORT = 8080;

// serving static files
app.use(express.static('public')); //express middleware

app.get('/', (req, res) =>
    res.send(`GraphQL is running!`)
);

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(PORT, () =>
    console.log(`your server is running on localhost:${PORT}/graphql`)
);