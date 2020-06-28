const radioGender = document.getElementsByName('gender');
const radioCountry = document.getElementsByName('country');
const btn = document.querySelector('.but');
const inp = document.querySelector('.inp');



btn.addEventListener('click' , Generate);

function Generate (){
    for( let i= 0 ; i < radioGender.length; i++){
        if(radioGender[i].checked){
           if(radioGender[i].value == 'man'){
               for(let i = 0 ; radioCountry.length; i++)
               if(radioCountry[i].checked)
               {
                   if(radioCountry[i].value == 'rus'){
                       var gender = 'man'; 
                       inp.value = GetNick(radioCountry[i].value , gender);
                   }
                   else if(radioCountry[i].value == 'uk'){
                    var gender = 'man'; 
                    inp.value = GetNick(radioCountry[i].value , gender);
                   }
                   else if(radioCountry[i].value == 'french'){
                    var gender = 'man'; 
                    inp.value = GetNick(radioCountry[i].value , gender);
                   }
                   else
                   var gender = 'man'; 
                    inp.value = GetNick(radioCountry[i].value , gender);
               }
           }
           else{
               for(let i = 0; i < radioCountry.length ; i++){
                   if (radioCountry[i].checked){
                    if (radioCountry[i].value == 'rus'){
                        inp.value = GetNick(radioCountry[i].value);
                        break;
                    }
                    else if(radioCountry[i].value == 'uk'){
                        inp.value = GetNick(radioCountry[i].value);;
                    }
                    else if(radioCountry[i].value == 'french'){
                        inp.value = GetNick(radioCountry[i].value);;
                    }
                    else 
                    inp.value = GetNick(radioCountry[i].value);;
                   }
               }
               
           }
        }
    }
}

function GetNick(Country , gender){
    if(Country == 'rus'){
        if(gender == 'man')
        {
            var name = ['Егор', 'Никита', 'Алексей'];
            var surname = ['Егоров','Санников', 'Карытов'];
            var nick = name[Math.floor(Math.random() * name.length)] + " " + surname[Math.floor(Math.random() * surname.length)];
        }
        else{
            var name = ['Татьяна', 'Анна', 'Елена'];
            var surname = ['Егорова','Санникова', 'Полякова'];
            var nick = name[Math.floor(Math.random() * name.length)] + " " + surname[Math.floor(Math.random() * surname.length)];
        }
        
    }
    else if(Country == 'uk'){
        if(gender == 'man'){
            var name = ['Oliver', 'Jack', 'Harris', 'Neo', 'Daniel', 'Alex', 'Rio'];
            var surname = ['Smith', 'Rockhold', 'Weidman', 'Jons', 'Luis', 'Kovington'];
            var nick = name[Math.floor(Math.random() * name.length)] + " " + surname[Math.floor(Math.random() * surname.length)];
        }
        else{
            var name = ['Emma', 'Kate', 'Leslie', 'Chloe', 'Sara', 'Amia', 'Amelia'];
            var surname = ['Smith', 'Barnes', 'Holm', 'Rousy', 'Nunes', 'Jay'];
            var nick = name[Math.floor(Math.random() * name.length)] + " " + surname[Math.floor(Math.random() * surname.length)];
        }
    }
    else if(Country == 'french'){
        if(gender == 'man'){
            var name = ['Leon', 'Fransis', 'Daniel', 'Teo', 'Daniel', 'Robert', 'Allen'];
            var surname = ['Cormie', 'Leroy', 'Moreau', 'Simon', 'Laurent', 'Henri'];
            var nick = name[Math.floor(Math.random() * name.length)] + " " + surname[Math.floor(Math.random() * surname.length)];
        }
        else{
            var name = ['Léa', 'Zoé', 'Lola', 'Chantal', 'Martine', 'Sandrine', 'Francoise'];
            var surname = ['Mercier', 'Beaudelaires', 'Castan', 'Lavigne', 'Lepetit', 'Legrand'];
            var nick = name[Math.floor(Math.random() * name.length)] + " " + surname[Math.floor(Math.random() * surname.length)];
        }
    }
    else if(Country == 'japan'){
        if(gender == 'man'){
            var name = ['Eita', 'Itsuki', 'Ryuto', 'Sota', 'Daniel', 'RSosuke', 'Haruki'];
            var surname = ['Kobayashi', 'Tamura', 'Yamada', 'Ishikawa', 'Laurent', 'Yokoyama'];
            var nick = name[Math.floor(Math.random() * name.length)] + " " + surname[Math.floor(Math.random() * surname.length)];
        }
        else{
            var name = ['Kokona', 'Yuna', 'Kanon', 'Aoi', 'Shoma', 'Momoka', 'Noa'];
            var surname = ['Sasaki', 'Harada', 'Ikeda', 'Ito', 'Chiba', 'Taniguchi'];
            var nick = name[Math.floor(Math.random() * name.length)] + " " + surname[Math.floor(Math.random() * surname.length)];
        }
    }
    return nick;
}