


function validateCategory(req, res, next){

    let categories = ["Sport", "Economy", "Politics"];
    const category = req.body.category
    if(categories.includes(category) ){
        next()
    }
    else{
        res.status(400).json({message : "fileld category not good"})
    } 

}

module.exports = {
    validateCategory
}