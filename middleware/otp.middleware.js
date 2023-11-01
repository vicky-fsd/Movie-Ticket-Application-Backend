const jwt=require('jsonwebtoken')

 let otpverify=(req,res,next)=>{
    let token=req.headers.authorization;
    
    if(token){
        let decoded=jwt.verify(token, process.env.access_token);
       // console.log(decoded)
        if(decoded.Useremail){
            req.body.Useremail=decoded.Useremail;
          //  console.log(req.body);
            next();
        }  
}
 }
module.exports=otpverify