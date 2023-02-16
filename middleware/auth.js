import  Jwt  from "jsonwebtoken";
const jwtKey = "Yash2304"


export function auth(root,args,context){
  
  console.log('a---------------------------------',context)
  let authToken;
  console.log(context)
   try {
      console.log("------->>>",context)
       authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inlhc2hAZ21haWwuY29tIiwiaWF0IjoxNjc2NTQxNzUxLCJleHAiOjE2Nzc4Mzc3NTF9.alJHNm11lQ2Vn_fTWtkAiw9Co21KhJx90O98Amthje4"
      console.log("auth---------->>>>>>>>",authToken)
      //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inlhc2hAZ21haWwuY29tIiwiaWF0IjoxNjc2NTIzNDg2LCJleHAiOjE2NzY1MzA2ODZ9.FbCEH9sJEONNYxeAxjebDjCczB-BPpB2lsDqWZf0PZw"
      if(authToken){
          console.log("----authToken---",authToken)

          let data = Jwt.verify(authToken, jwtKey)

          // console.log(data,"yash---->")

          if(data){
            return data
          }else{
            return ""
          }
          // Jwt.verify(authToken, jwtKey, (err, valid) => {
          //     if (err) {
          //       console.log({message :"please enter a valid token", code : 200, status : false});
          //       res.send("errrrrrr")
          //     } else {
          //       console.log(valid)
          //       return valid
          //       //next()
                
          //     }
          //   });
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