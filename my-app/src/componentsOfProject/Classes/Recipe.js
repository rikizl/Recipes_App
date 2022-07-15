export class Recipe{
    constructor( id , name, type, level , meatyOrDairy, image, ingredients, instructions, like ){
        this.id=id;
        this.name=name;
        this.type=type;
        this.level=level;
        this.meatyOrDairy=meatyOrDairy;
        this.image=image;
        this.ingredients=ingredients;
        this.instructions=instructions
        this.like=like;
    }

}