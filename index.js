import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/type-defs.js";
import { resolvers } from "./schema/resolvers.js";
import User from "./models/User.js";
import "./models/config.js"
import mongoose from 'mongoose';
import usersResolvers from "./resolvers/user.js";


const users =async (id)=>{
    const user = await User.findById(id)
    console.log(user)
    return user;
}
const server = new ApolloServer({typeDefs,resolvers,
    context: async (request) => {
        const user = await users(request.req.headers["auth"]);
        console.log("dssds",request.req.headers);
        if(user == null) {
            return request;
        }
        return { user,...request};
    }
})


const port = 2000



server.listen(port).then(({url})=>{
    console.log(`server is running at : ${url}`);
})