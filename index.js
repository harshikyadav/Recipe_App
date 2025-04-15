const express=require('express');
const app=express();
const path=require('path');
const data=require('./card_data');
let recipe_data=require('./recipie_data');
const { v4: uuidv4 } = require('uuid');
const port=3001;
var methodOverride = require('method-override')

app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.get('/home',(req,res)=>{
    res.render('first',{data:data});
})

app.get('/recipes',(req,res)=>{
    // console.log(recipe_data);
    res.render('about',{recipe_data:recipe_data});
})

app.get('/recipes/:id',(req,res)=>{
//    console.log(req.params.id;
   const id=req.params.id;
   const recipe_Object= recipe_data.find((val)=>{
    return val.id==id;
   })

   res.render('review',{obj:recipe_Object});
})

app.get('/contacts',(req,res)=>{
    res.render('contact');
})

app.get('/create',(req,res)=>{
    res.render('create');
})

app.post('/create',(req,res)=>{
    // console.log(req.body);
    const requested_data=req.body;
    requested_data.id=uuidv4();
    recipe_data.push(requested_data);
    res.redirect('/recipes')
})


app.get('/edit/:id',(req,res)=>{
    // console.log(req.params.id);
    const id=req.params.id;
    const recipe_Object= recipe_data.find((val)=>{
      return val.id==id;
     })
   res.render('edit',{obj:recipe_Object});
})


app.post('/edit/:id',(req,res)=>{
    const id=req.params.id;
  let eindex=null;
  recipe_data.forEach((val,index)=>{
        if(val.id==id){
            eindex= index;
        }
   })
   recipe_data[eindex]=req.body;
   
   res.render('review',{obj:recipe_data[eindex]});
})

app.delete('/delete/:id',(req,res)=>{
    recipe_data =recipe_data.filter((val)=>{
        return val.id!=req.params.id;
        
    })
   res.redirect('/recipes');
})
app.use((req, res) => {
    res.redirect('/home');
  });
app.listen(port,()=>{
    console.log('it is working');
})