const {ApolloServer} = require("apollo-server");
const connectDb = require('./config/db');
const typeDefs = require('./types');
const resolvers = require('./resolvers');
const models = require('./models');
const jwt = require("jsonwebtoken");

connectDb();
const SECRET = "mySecret";
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
        var token = "";
        console.log(req.body["operationName"])
        if(req.headers["authorization"]){
          token = await req.headers["authorization"].split(" ")[1];
          if (token == undefined) {
            token = req.headers["authorization"].split(" ")[0]
          }
        }
        let user;
        try {
          user = await jwt.verify(token, SECRET);
          console.log("user = ", user["user"]);
        } catch (error) {
          console.log(`${error.message} caught`);
        }
        // the user and secret we are passing here is what we access in every resolver
        return {
          models,
          user,
          SECRET
        };
      }
});

server.listen({port: process.env.PORT || 4000}).then(({url}) => {
    console.log(`Server is ready at the url - ${url}`)
})