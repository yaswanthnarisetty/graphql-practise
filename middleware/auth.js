import  Jwt  from "jsonwebtoken";
const jwtKey = "Yash2304"


export const auth =  async (req , res, next) => {
  console.log('a---------------------------------')
   try {
      // authToken = req.headers
      //console.log(authToken)
      console.log("------->>>",req)
      let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inlhc2hAZ21haWwuY29tIiwiaWF0IjoxNjc2NTIzNDg2LCJleHAiOjE2NzY1MzA2ODZ9.FbCEH9sJEONNYxeAxjebDjCczB-BPpB2lsDqWZf0PZw"
      if(authToken){
          //onsole.log("----authToken---",authToken)
          Jwt.verify(authToken, jwtKey, (err, valid) => {
              if (err) {
                console.log({message :"please enter a valid token", code : 200, status : false});
              } else {
                console.log("kdvnknvknvjkn")
                return true
                
              }
            });
            console.log("====  req =======", )
      }else{
         console.log("please add a token");
      }
  } catch (error) {
      console.log(`Unable to authenticate using this token`, error)
  }
  }

  //let authToken = req
  


export default auth