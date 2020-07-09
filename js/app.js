// Review Adding Functions

var c = 10;
var h = 23;
var f = 8 ;
var g = 9;

//

function add(arg1, arg2) {
    return arg1 + arg2 ;
}

console.log(add(c,h));

//

function add3(arg5, arg6, arg7) {
    return arg5 + arg6 + arg7 ;
}

console.log(add3(c,h,f));

//

function add4(arg8, arg9, arg10, arg11) {
    return arg8 + arg9 + arg10 + arg11 ;
}

console.log(add4(c,h,f,g));

// Objects

var user = {
    "name": "Bob",
    "age": 25,
    "Favsoda": ["Sprite", 4]
};

user.foot = "Stinky";
console.log(user);
//
user["age"] = 5;
console.log(user);

var nameValue = user.name;
console.log(user.name)
//
var ageNumber = user["age"];
console.log(user["age"])

//------------------

var meats = {
    "poultry": "Chicken",
    "red-meat": "Beef",
        "piggy": "Pork"
};

meats["jerkey"] = "spicy";
console.log(meats);
//

meats.piggy = ["pork", "lame"];
console.log(meats);

var piggyValue = meats.piggy;
console.log(meats.piggy)
//
var redMeat = meats["red-meat"];
console.log(meats["red-meat"])

//-----------------

var food = {
    "sweet": "potato",
    "lima": "beans",
    "smoked": "bacon"
};

food.ramen = "noodles";
console.log(food);
//

food.sweet = "peas";
console.log(food);

var smokedValue = food.smoked;
console.log(food.smoked)
//
var sweetValue = food["sweet"];
console.log(food["sweet"])