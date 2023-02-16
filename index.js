import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/type-defs.js";
import { resolvers } from "./schema/resolvers.js";

import "./models/config.js";


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context :async({req})=>{
    // console.log(req.headers.authorization)
    
    return {...req}
  },

});

const port = 2000;

server.listen(port).then(({ url }) => {
  console.log(`server is running at : ${url}`);
});
