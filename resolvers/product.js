import Product from "../models/Product.js";
import { ApolloError, AuthenticationError } from "apollo-server-errors";
import User from "../models/User.js";
import usersResolvers from "./user.js";
import verifyToken from "../middleware/auth.js";
import auth from "../middleware/auth.js"
import Jwt  from "jsonwebtoken";

const JwtToken = "Yash2304"

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

        async AddProduct(root,{productInput:{name,price,category,company}}, context){

            console.log("-------------ctx-------------",context.headers)
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
        getProducts :async (root,args,context)=>{
            // console.log(context)
            let x=Object.values(context).join(',').replaceAll(',', '')
            console.log(x)
            let data = Jwt.verify(x,JwtToken)
            if(data){
                console.log(data)
                const product = await Product.find()
                return product;
            }
            else{
                new AuthenticationError("please verify the token")
            }
            
               }
        
        // async getProducts(root,args,context,info){
        //     console.log(auth())
        //     if(auth){
        //         const product = await Product.find()
        //         return product;
        //     }
        //     // console.log('context',Object.values(context).join(',').replaceAll(',', ''))
             
        // }
        
}
}

export default ProductResolver