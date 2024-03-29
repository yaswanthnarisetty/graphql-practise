import User from "../models/User.js";
import { ApolloError } from "apollo-server-errors";
import bcrypt from "bcryptjs";
import  Jwt from "jsonwebtoken";



export const usersResolvers = {
  Mutation: {
    async RegisterUser(root, { registerInput: { name, email, password, role } },{req,res}) {
      const oldUser = await User.findOne({ email });

      if (oldUser) {
        throw new ApolloError("user already exists");
      }

      let encryptPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        name: name,
        email: email,
        password: encryptPassword,
        role: role,
      });


      const token = Jwt.sign({ user_id: newUser._id, email: newUser.email, role : newUser.role }, "Yash2304",{
        expiresIn: "15d",
      }
      
      );
      newUser["token"] = token
      console.log(newUser)
      const result = await newUser.save()
      return {
        id:result.id,
        token:token,

        ...result._doc
      }

    },
    async LoginUser(_, { loginInput: { email, password} }) {
    const user = await User.findOne({ email });


      if (user && (await bcrypt.compare(password,user.password))){
        const token = Jwt.sign({ _id: user._id, email:user.email,role:user.role }, "Yash2304");
          user.token = token  
          console.log(user.token)
          return {
            id:user.id,
            token:token,
            
            ...user._doc
          }
      }
      else{
        throw new ApolloError('incorrect password','INCORRECT_PASSWORD')
      }
        
    },
    
  },
  Query : {
    user :(_,{ID}) => User.findById(ID)
  },

  
};



export default usersResolvers;