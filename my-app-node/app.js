"use strict"
//טעינת הספריה המאפשרת להתחבר ל mongodb
var mymongo = require("mongoose")
//הגדרות תצורה לחיבור למסד הנתונים
//1. כתובת החיבור
//כאשר המסד לא יושב בשרת המקומי, יש לשנות את הכתובת לכתובת המתאימה
//כתובת החיבור מגדירה את פרוטוקול התקשורת
//המיקום - כתובת מקומית
//שם מסד הנתונים - מבדיל בין אותיות רישיות
//2. הגדרות אבטחה
mymongo.connect("mongodb://localhost:27017/RecipesWebsite", 
{useNewUrlParser:true, useUnifiedTopology:true})
//פקודה זו מיצרת את התקשורת עם מסד הנתונים ומחזירה משתנה המייצג את מסד הנתונים
var db = mymongo.connection
//כדי לפתוח בפועל את המסד ולאפשר גישה לנתונים עצמם
//יש להפעיל את האירוע open
//בסיום האירוע מתבצעת הפונקציה שבה נודיע כי שלב ההתחברות עבר בהצלחה
db.on("open", ()=>{
    console.log("db is opening")
})

const express=require('express')
const bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.json())
app.use((req , res , next)=>{
    res.header("Access-Control-Allow-Origin" , "*");
    res.header("Access-Control-Allow-Headers" , "Origin, X-Requested-With, Content-Type, Accept, Authoriztion");
     if(req.method === "OPTIONS" )
     {
         res.header("Access-Control-Allow-Method" , "PUT ,POST ,PATCH, DELETE ,GET");
         return res.status(200).json({});
     }
     next();
})


app.listen(4000,()=>{
})

app.get('/',(req,res)=>{
    res.status(200).send('wellcome to our server!!!')
})

var recipeController = require('./project/routers/recipe')
var userController = require('./project/routers/users')
app.use("/user", userController)
app.use("/recipe", recipeController)



