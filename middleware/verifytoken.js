
import  Jwt  from "jsonwebtoken";



export default function verifyToken(req, res, next) {
    let token = req.headers["authorization"];
    console.log("==>>token", token)
    if (token) {
      Jwt.verify(token, jwtKey, (err, valid) => {
        if (err) {
          res.send("please enter a valid token");
        } else {
          req.role = valid.role;
          req.userId = valid._id;
          next();
        }
      });
    } else {
      res.send("please add a token");
    }
  }
  
  