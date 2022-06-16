const something = (req,res,next)=>{
    console.log(req.url)
    console.log("You made a request")
    next();
}
module.exports = {
something
}