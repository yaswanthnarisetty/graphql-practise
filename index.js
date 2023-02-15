import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/type-defs.js";
import { resolvers } from "./schema/resolvers.js";
import User from "./models/User.js";
import "./models/config.js"
import mongoose from 'mongoose';
import  Jwt  from "jsonwebtoken";
import { AuthenticationError } from "apollo-server";
const jwtKey = "Yash2304"

const server = new ApolloServer({typeDefs,resolvers,
    // context:async({req}) =>{
    //     const token =req.headers.authorization
    //     Jwt.verify(token, jwtKey,(err,valid) =>{
    //         if (err) {
    //             new AuthenticationError("enter a valid token")
    //           } else {
                
    //             return true
    //           }
    //     })
    //     console.log(token)
       

    // },

}
    )


const port = 2000



server.listen(port).then(({url})=>{
    console.log(`server is running at : ${url}`);
})