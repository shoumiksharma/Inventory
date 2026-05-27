import jwt from 'jsonwebtoken'


export const middleware = (req, res, next) => {
    try{
        const token = req.cookies.inventoryToken;

        if(!token){
            return res.status(401)
                      .json({message : "Not Authorised"})
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decode.userId;
        req.name = decode.name;

        next();
    }
    catch(err){
        console.log("Middleware Error : ",err);
        return res.status(500)
                  .json({message : "Server Error"})
    }
}