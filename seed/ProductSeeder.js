var Product = require('../models/product');

var mongoose = require('mongoose');
//mongoose.connect('localhost:27017/shopping',{ useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true,useUnifiedTopology: true});
var products = [
    new Product({
  
    title: 'Small Pizza',
    description: '10" pizza for one person',
    price: 269.99

}),

new Product({
  
    title: 'Medium Pizza',
    description: '10" pizza for one person',
    price: 322.99

}),

new Product({
  
    title: 'Large Pizza',
    description: '10" pizza for one person',
    price: 394.99

}),

];

var done =0;

for (var i=0; i<products.length; i++){
   
    products[i].save(function(err,result){
        done++;
        if (done === products.length){
            exit();
        }
    });

}

function exit(){
    mongoose.disconnect();
}