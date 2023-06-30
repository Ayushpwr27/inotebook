var jwt = require("jsonwebtoken");
const JWT_SECRET = "@all&mighty$push";
const fetchuser = (req,res,next)=>{
    //Get the user from the jwt token and id to request object
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({error:"access denied"})
    }

    try {
        const data = jwt.verify(token,JWT_SECRET)
        req.user = data.user;
        next();        
    } catch (error) {
        res.status(401).send({error:"access denied"})
    }

}

module.exports = fetchuser;