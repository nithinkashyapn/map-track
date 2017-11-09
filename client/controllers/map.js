//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();

router.post('/', (req,res,next) => {
    res.send("POST");

});

router.delete('/:id', (req,res,next)=> {
    res.send("DELETE");

})

module.exports = router;

router.get('/',(req,res) => {
    bucketlist.getAllLists((err, lists)=> {
        if(err) {
            res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({success: true, lists:lists},null,2));
            res.end();  

    }   
    });
});
