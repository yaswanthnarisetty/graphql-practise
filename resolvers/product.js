import Product from "../models/Product.js";
import { ApolloError } from "apollo-server-errors";
import User from "../models/User.js";
import usersResolvers from "./user.js";
import verifyToken from "../middleware/auth.js";
export const ProductResolver = {
    Mutation :{

        async AddProduct(root,{productInput:{name,price,category,company}}){
            
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
        getProducts:async ()=>{
            console.log(verifyToken)
            const product = await Product.find()
            
            return product;
        },
        
}
}

export default ProductResolver