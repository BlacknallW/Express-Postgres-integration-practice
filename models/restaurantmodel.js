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
    static async getAll(){
        try{ 
            const response = await db.any('SELECT * FROM restaurant');
            return response;
        } catch(err) {
            return err.message
        }
    };
}



module.exports = RestaurantList
