import  AuthenticationError from "apollo-server-errors";



export function verifyToken(req, res, next) {
  let token = req.headers["authorization"];
  if (token) {
    Jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        AuthenticationError("enter a valid token")
      } else {
        
        return true
      }
    });
  } else {
    AuthenticationError("please add a token")
  }
}


export default verifyToken