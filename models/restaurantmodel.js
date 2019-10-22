const db = require("./conn")



class RestaurantList{
    constructor(restname, distance, stars, category, favoritedish, doestakeout, lastvisit) {
        this.restname = restname;
        this.distance = distance;
        this.stars = stars;
        this.category = category;
        this.favoritedish = favoritedish;
        this.doestakeout = doestakeout;
        this.lastvisit = lastvisit;
    }
    get getAll(){
        db.any('SELECT * FROM restaurant;').then(response => {
            console.log(response)
        })
    };
}



module.exports = RestaurantList;

