var exp = require("express")

var router = exp.Router()
// var crs = require("crs")
// router.use(crs())
let recipe = require('../recipe')
let user = require('../user')


router.get("/getAllRecipes", function(req, response)
{
    response.status(200, {"Content-Type":"application/json"})
    recipe.find({}, (err, results)=>{
        if (err)
            console.log(err)
        else
            response.json(results)
    })
    
})

router.post("/addRecipe", function(req, response)
{
    var r = req.body;
    response.status(200, {"Content-Type":"application/json"})
    recipe.create(r, (err, results)=>{
        if (err)
            console.log(err)
        else
        //התוצאות הן האובייקט שנוסף
            response.json(results)
    })
})

// router.delete("/deleteRecipe/:id", function(req, response)
// {
//     var idParams = req.params.idRecipe;
//     recipe.deleteOne({id:idParams}, (err, results)=>{
//          console.log(rec._id);
//         if (err)
//             console.log(err)
//         else
//         //התוצאות הן האובייקט שנמחק
//             response.json(results)
//     })
// })

router.delete("/deleteRecipe", function(req, response)
{
    let rec = req.body;
    console.log("id: ",rec._id);
    recipe.deleteOne({id:rec._id}, (err, results)=>{
        console.log(rec._id);
        if (err)
            console.log(err)
        else
        //התוצאות הן האובייקט שנמחק
            response.json(results)
    })
})



// router.post('/deleteRecipe', (req, res)=>{
//     let rec = req.body;
//     if(rec)
//     {
//         recipe.recipes=recipe.recipes.filter(x=> x.id!=rec.id)
//         res.status(200).json({success:true, description:"recipe delete successfuly"})
//     }
//     else
//     recipe.status(401).json({error:true, description:"missing send recipe"})
// })


router.post('/addLikeToRecipe/:id',(req, res)=>{
    let id= req.params.id;
    console.log("this id...");
    console.log(id);
    if(id)
    {
        ind = recipe.recipes.findIndex(x=>x.id==id);
        console.log(ind);
        recipe.recipes[ind].like ++;
        res.status(200).json({success:true, description:"success added like"})
    }
    res.status(401).json({error:true, description:"missing send id"})
})

module.exports = router;

