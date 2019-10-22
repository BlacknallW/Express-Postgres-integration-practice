const express = require('express'),
    router = express.Router(),
    restmodel = require("../models/restaurantmodel")

router.get("/", async function(req,res,next){
    const restaurantData = await restmodel.getAll();
    res.render("template",{
        locals: {
            title: "Restaurant Ratings",
            RestaurantList: restaurantData
        },
        partials: {
            partial: "partial-restaurant"
        }
    });
});

module.exports = router;