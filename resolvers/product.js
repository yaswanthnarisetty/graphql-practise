import Product from "../models/Product.js";
import { ApolloError } from "apollo-server-errors";
import User from "../models/User.js";
import usersResolvers from "./user.js";
import verifyToken from "../middleware/auth.js";
import auth from "../middleware/auth.js"

import Header from "../middleware/header.js";

export const ProductResolver = {
    // context: async ({req , res, next}) => {
    //     let authToken;
    //     try {
    //         let authToken = req.headers.authorization
    //         if(authToken){
    //             console.log("----authToken---")
    //             Jwt.verify(authToken, jwtKey, (err, valid) => {
    //                 if (err) {
    //                   console.log({message :"please enter a valid token", code : 200, status : false});
    //                 } else {
    //                   req.role = valid.role;
    //                   req.userId = valid._id;
    //                   next();
    //                 }
    //               });
    //               console.log("====  req =======", req.role, req.userId)
    //         }else{
    //            console.log("please add a token");
    //         }
    //     } catch (error) {
    //         console.log(`Unable to authenticate using this token`, error)
    //     }
    // },
    
    
    
    Mutation :{

        async AddProduct(root,{productInput:{name,price,category,company}}, ctx){

            let sym = Header(ctx)
            req.tk = ctx[sym].xyz
            console.log("-------------ctx-------------",ctx[sym].xyz)
            let product = new Product({
                name:name,
                price:price,
                category:category,
                company:company
            })
            const result = await product.save()

            return{
                _id:result._id,
                ...result._doc
            }

        },



        async UpdateProduct (root,{_id, productInput}){
            console.log(_id,productInput)
            let result = await Product.findByIdAndUpdate(_id,productInput)
            return {
                _id:result._id,
                ...result._doc
            }
        },
        async FindProduct(root,_id){
            console.log(_id)
            let result = await Product.findOne(_id)
            console.log(result)
            return {
                _id:result._id,
                ...result._doc
            }
        },
        async DeleteProduct(root,_id){
            console.log(_id)
            let result = await Product.deleteOne(_id)
            return{
                result
            }
        }       
    },
    Query : { 
        getProducts :auth(async()=>{
            const product = await Product.find()
            return product;
        })
        
}
}

export default ProductResolver