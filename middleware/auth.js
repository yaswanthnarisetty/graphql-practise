import { AuthenticationError } from "apollo-server-errors";
import Jwt from "jsonwebtoken";
const jwtKey = "Yash2304"

// export const auth  = (context) => {
//     const token = context.req.headers.Authorization;
// }

export function verifyToken(req, res, next) {
    let token = req.headers["authorization"];
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