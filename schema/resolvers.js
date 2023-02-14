// import { UserList } from "../FakeData.js";
import User from '../models/User.js'
import usersResolvers from '../resolvers/user.js'
import ProductResolver  from '../resolvers/product.js'
import _ from "lodash"
import Product from '../models/Product.js'

export const resolvers= {
    Query:{
        users:async ()=>{
            const user = await User.find()
            return user;
        },
        
        ...usersResolvers.Query,
        ...ProductResolver.Query
    
    },
    Mutation:{
        ...usersResolvers.Mutation,
        ...ProductResolver.Mutation
        
    }

    

    // }
    // Mutation :{
    //     CreateUser:(parent,args) =>{
    //         const user = args.input;
    //         const lId = UserList[UserList.length-1].id
    //         user.id = lId+1
    //         UserList.push(user)
    //         return user
    //     }
    // }
}

