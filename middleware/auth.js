
import  Jwt  from "jsonwebtoken"



export const verifyToken = async({req,res}) =>{
  const token =await req.headers.authorization
  Jwt.verify(token, jwtKey,(err,valid) =>{
      if (err) {
          new AuthenticationError("enter a valid token")
        } else {
          
          res.send(valid)
        }
  })
  console.log(token)
}

export default verifyToken