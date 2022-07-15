var mongodb = require("mongoose")
//הגדרת הסכמה של הטבלה במסד הנתונים
var userModel = new mongodb.Schema({
    id:String,
    name:String,
    type:String,
    level:String,
    meatyOrDairly:String,
    image:String,
    ingredients:String,
    instructions:String
})
var users = mongodb.model("myusers", userModel, "Users")
module.exports = users
// class User{
//     constructor(id, name, password, email, address, recipeList)
//     {
//         this.id=id;
//         this.name=name;
//         this.password=password;
//         this.email=email;
//         this.address=address;
//         this.recipeList=recipeList;
//     }
// }
// let u1= new User(1, "שרי", "123", "s@gmail.com", "גולדקנוף",[])
// let u2= new User(2, "ריקי", "12", "r@gmail.com", "כפר עברי",[])

// let users=[u1, u2]
// module.exports={
//     User,
//     users
// }