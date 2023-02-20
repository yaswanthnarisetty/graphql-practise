import Product from "../models/Product.js";
import { ApolloError, AuthenticationError } from "apollo-server-errors";
import User from "../models/User.js";
import usersResolvers from "./user.js";
import verifyToken from "../middleware/auth.js";
import auth from "../middleware/auth.js";
import Jwt from "jsonwebtoken";

const JwtToken = "Yash2304";

export const ProductResolver = {
  
  Mutation: {
    async AddProduct(
      root,
      { productInput: { name, price, category, company } },
      ctx
    ) {
      console.log("-------------ctx-------------", ctx.userId);
      let product = new Product({
        name: name,
        price: price,
        category: category,
        company: company,
        userId:ctx.userId
      });
      const result = await product.save();
      console.log(result)
      return {
        _id: result._id,
        ...result._doc,
      };
    },

    async UpdateProduct(root, { _id, productInput }) {
      console.log(_id, productInput);
      let result = await Product.findByIdAndUpdate(_id, productInput);
      return {
        _id: result._id,
        ...result._doc,
      };
    },
    async FindProduct(root, _id) {
      console.log(_id);
      let result = await Product.findOne(_id);
      console.log(result);
      return {
        _id: result._id,
        ...result._doc,
      };
    },
    async DeleteProduct(root, _id) {
      console.log(_id);
      let result = await Product.deleteOne(_id);
      return {
        result,
      };
    },
  },
  Query: {
    getProducts: async (root, args, ctx) => {
        let result ;
        let x= ctx.role
      if(ctx.role === "admin"){
        console.log("ctx", ctx.user_Id)
        //console.log(await Product.find({userId:ctx.user_Id}))
         result =  await Product.find()
        //  return result
      }
      else{
        console.log('else ')
        console.log(ctx)
        let uId = ctx.userId
        console.log(uId)
         result = await Product.find({userId:uId})
         console.log(result)
        //  return result;
      } 
      return result
    },
  },
};
 
export default ProductResolver;
