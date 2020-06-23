const express = require('express');
const router = express();

router.get('/' ,(req , res ) =>{
    res.render('indx');
});

router.post('/in' , (req, res)=>{
    
    if(req.body.man){
        console.log('Выбран мужик!');
        if(req.body.rus){
            console.log('русский мужик');
        }
        else if(req.body.uk){
            console.log('бритаский мужик');
        }

    }
    else{
        console.log('Выбрана баба!');
        if(req.body.rus){
            console.log('русская женщина');
        }
        else if(req.body.uk){
            console.log('бритиш женщина!');
        }
    } 
    var txt = 'опа';
    res.render('indx' , {txt});
    
});

module.exports = router;