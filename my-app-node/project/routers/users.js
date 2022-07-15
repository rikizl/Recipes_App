var exp = require("express")

var router = exp.Router()
// var crs = require("crs")
// router.use(crs())
let user = require('../user')

router.post('/addUser',(req, res)=>
{
    let u= req.body;
    if(u)
    { 
        user.users.push(u);
        res.status(200).json({success:true, description:"user added successfuly"})
    }
    else
    res.status(401).json({error:true, description:"Failed to add user"})
})
router.get('/login/:name/:password',(req, res)=>{
    let name = req.params.name;
    let password = req.params.password;
    if(name && password)
    {
        user.users.forEach((u)=>{
            console.log(u.name +" " +u.password);
            if(u.name === name && u.password===password)
            res.status(200).json({success:true , user:u})
        })
        res.status(200).json({error:true , description:"user not exist"})
    }
    else
    res.status.status(200).json({error:true, description:"missing name / id"})
})
router.get('/getAllUsers',(req, res)=>{
    res.status(200).send(user.users)
})
router.post('/deleteUser',(req, res)=>{
    let u=req.body;
    if(u)
    {
        user.users=user.users.filter(x=> x.id != u.id)
        res.status(200).json({success:true, description:"user delete successfuly", users:user.users})
    }
    else
    recipe.status(401).json({error:true, description:"missing send user"})
})

router.post('/updateUser', (req, res)=>{
    let u = req.body;
    if(u)
    {
        userToUpdate = user.users.findIndex(x=>x.id==u.id);
        if(userToUpdate)
        {
            console.log(userToUpdate)
            user.users[userToUpdate].name= u.name;
            user.users[userToUpdate].password= u.password;
            user.users[userToUpdate].email= u.email;
            user.users[userToUpdate].address= u.address;
            user.users[userToUpdate].recipeList= u.recipeList;
            res.status(200).json({success:true, user: user.users[userToUpdate]})

        }
        else
        res.status(401).json({error:true, description:"not fount this user"})
    }
    else
    res.status(401).json({error:true, description:"missing send user"})
})
router.post('/addRecipeToUser/:id', (req, res)=>{
    let id= req.params.id;
    let rec= req.body;
    if(id)
    {
        thisUser=user.users.findIndex(x=>x.id==Number(id))
        if(thisUser || thisUser===0)
        {
            user.users[thisUser].recipeList.push(rec)
            res.status(200).json({success:true, description:"recipe added successfuly", user:thisUser})
        }
        else
        res.status(401).json({error:true, description:"this user not exist"})
    }
    else
    res.status(401).json({error:true, description:"missing send id"})
})

router.post('/updateRecipeToUser', (req, res)=>{
    let id = req.query.id;
    let rec = req.body;
    if(id && rec)
    {
        usertoUpdateRecipe = user.users.findIndex(x=>x.id == Number(id))
        if(usertoUpdateRecipe || usertoUpdateRecipe===0)
        {
            console.log(user.users[usertoUpdateRecipe].recipeList.length);
            if(!user.users[usertoUpdateRecipe].recipeList.length)
            {
                console.log(user.users[usertoUpdateRecipe].recipeList);
                res.status(401).json({error:true, description:"recipe list is empty"})

            }
           else
           {
                recipeToUpdate = user.users[usertoUpdateRecipe].recipeList.findIndex(x=>x.id==rec.id);
                if(recipeToUpdate || recipeToUpdate===0)
                {// type, level, meatyOrDairy, image, ingredients , instructions
                    console.log('recipe...');
                    console.log(user.users[usertoUpdateRecipe].recipeList[recipeToUpdate]);
                    console.log('all...');
                     console.log(user.users[usertoUpdateRecipe]); 
                     user.users[usertoUpdateRecipe].recipeList[recipeToUpdate].name=rec.name;
                     user.users[usertoUpdateRecipe].recipeList[recipeToUpdate].level=rec.level;
                     user.users[usertoUpdateRecipe].recipeList[recipeToUpdate].meatyOrDairy=rec.meatyOrDairy;
                     user.users[usertoUpdateRecipe].recipeList[recipeToUpdate].image=rec.image;
                     user.users[usertoUpdateRecipe].recipeList[recipeToUpdate].ingredients=rec.ingredients;
                     user.users[usertoUpdateRecipe].recipeList[recipeToUpdate].instructions=rec.instructions;
                    res.status(200).json({success:true, description:"success update recipe to this user", users:user.users}) 
                }
                 else
                      res.status(401).json({error:true, description:"this recipe not exist"})
           }
        }
        else
        res.status(401).json({error:true, description:"this user not exist"})

    }
    res.status(401).json({error:true, description:"missing id / recipe"})

})


module.exports = router;
