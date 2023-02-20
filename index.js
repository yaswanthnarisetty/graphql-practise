import { ApolloServer, AuthenticationError } from "apollo-server";
import { typeDefs } from "./schema/type-defs.js";
import { resolvers } from "./schema/resolvers.js";
import Jwt from "jsonwebtoken";
import "./models/config.js";
const JwtToken = "Yash2304";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    //  console.log(req.headers.authorization);
    // console.log(req.next);
    //console.log(req.headers['authorization']);
    // let x = req.headers.authorization;
    if (req.headers.authorization) {
      let role, userId;
      Jwt.verify(req.headers.authorization, JwtToken, (err, valid) => {
        if (err) {
          new AuthenticationError("please enter a valid token");
        } else {
          //console.log(valid)
          role = valid.role;
          userId = valid._id;
          //console.log(userId)
          req.next();
        }
      });
      return { ...req, role, userId };
    } else {
      new AuthenticationError("please add a token");
    }
  },
});

const port = 2000;

server.listen(port).then(({ url }) => {
  console.log(`server is running at : ${url}`);
});
