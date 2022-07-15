var mongodb = require("mongoose")
//הגדרת הסכמה של הטבלה במסד הנתונים
var recipeModel = new mongodb.Schema({
    id:String,
    name:String,
    type:String,
    level:String,
    meatyOrDairly:String,
    image:String,
    ingredients:String,
    instructions:String
})
var recipes = mongodb.model("myrecipes", recipeModel, "Recipes")
module.exports = recipes
// class Recipe{ 
//     constructor(id, name, type, level, meatyOrDairy, image, ingredients , instructions, like)
//     {
//         this.id=id;
//         this.name=name;
//         this.type=type;
//         this.level=level;
//         this.meatyOrDairy=meatyOrDairy;
//         this.image=image;
//         this.ingredients=ingredients;
//         this.instructions=instructions
//         this.like=like; 
//     }
// }     
// let r1 = new Recipe(1, "עוגת גבינה", "עוגות", "קל", false,"image", ["סוכר", "קמח", "ביצים"], "לערבב את כל החומרים יחד עד לתערובת אחידה ולאפות ה ולאפות בתנור שחומם מראש לחום של 180 מעלות למשך 40 דקות",0);
// let r2 = new Recipe(2, "עוגת שוקולד", "עוגות", "בינוני", false,"image", ["סוכר", "קמח", "ביצים"], "לערבב את כל החומרים יחד עד לתערובת אחידה ולאפות ה ולאפות בתנור שחומם מראש לחום של 180 מעלות למשך 40 דקות",0);
// let r3 = new Recipe(3, "קציצות בשר", "בשרי", "קשה", true,"image", ["מלח", "שמן", "בשר טחון"], "לערבב את כל החומרים יחד עד לתערובת אחידה ולאפות ה ולאפות בתנור שחומם מראש לחום של 180 מעלות למשך 40 דקות",0);
// let r4 = new Recipe(4, "קינוח גבינה וריבת חלב", "קינוחים", "קל", false,"image", ["5-6 ביסקוויטים מסוג “פתי בר” מפוררים", "מיכל שמנת מתוקה (250 מל)", "כף גדושה סוכר", "רבע כוס (60 מ”ל) חלב קר", "3 כפות אבקת אינסטנט פודינג וניל", "3 כפות גבינה לבנה" , "3 כפות ריבת חלב + 2 כפות חלב"],
//  "-מקציפים בקערה שמנת מתוקה עם סוכר במשך כחצי דקה (טיפ להקצפה מוצלחת: מומלץ להכניס את השמנת למקפיא 10 דקות לפני ההקצפה). מוסיפים חלב ואינסטנט פודינג וניל וממשיכים להקציף עד לקבלת קצפת יציבה. מוסיפים את הגבינה ומערבבים בעזרת כף בתנועות קיפול.-מערבבים בקערית נפרדת 3 כפות ריבת חלב עם 2 כפות חלב עד לתערובת נוזלית.–הרכבת המנה:מניחים בתחתית כל כוס כמות של כף מפירורי הביסקוויטים.מעל- מזליפים מתערובת קרם הגבינה (ניתן להשתמש בשקית זילוף או בשקית אוכל רגילה ולגזור את הפינה).מעל- שמים כפית מתערובת ריבת החלב.מעל – מזליפים מתערובת קרם הגבינה.מעל – שמים כפית מתערובת ריבת החלב.-מכסים או עוטפים בניילון נצמד ומכניסים למקרר כ-3 שעות לפחות לפני ההגשה.",0);


// let recipes=[r1,r2,r3, r4];
// module.exports = {
//     Recipe,
//     recipes
// }
