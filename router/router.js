const express = require('express');
const router = express();

router.get('/' ,(req , res ) =>{
    res.render('indx');
});

router.post('/in' , (req, res)=>{
    var txt ;
    if(req.body.man){
        console.log('Выбран мужик!');
        if(req.body.rus){
            console.log('русский мужик');
            var txt = 'Толя';
        }
        else if(req.body.uk){
            console.log('бритаский мужик');
            var txt = 'Brown';
        }

    }
    else{
        console.log('Выбрана баба!');
        if(req.body.rus){
            console.log('русская женщина');
            var txt = 'Ира';
        }
        else if(req.body.uk){
            console.log('бритиш женщина!');
            var txt = 'Angelina';
        }
    } 
   // return txt;
    
    res.render('indx' , {txt});
    
});

module.exports = router;