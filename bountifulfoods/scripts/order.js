//Data file for dropdowns
const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"

const list = document.getElementById('orderList');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const myButton = document.querySelector('button');
let carbs = 0;
let protein = 0.0;
let fat = 0.0;
let sugar = 0.0;
let calories = 0;


myButton.addEventListener('click', () => {
    list.innerHTML="";
    addToOrder('Name: ' + document.getElementById('firstname').value);
    addToOrder('Email: ' + document.getElementById('email').value);
    addToOrder('Cell: ' + document.getElementById('cellnumber').value);
    addToOrder('Choice 1: ' + choice1.value);
    addToOrder('Choice 2: ' + choice2.value);
    addToOrder('Choice 3: ' + choice3.value);
    addToOrder('Special Instructions: ' + document.getElementById('special').value);
    macronutrient("carbohydrates", carbs);
    macronutrient("protein", protein);
    macronutrient("fat", fat);
    macronutrient("sugar", sugar);
    macronutrient("calories", calories);

    addToOrder("Carbohydrates: " + carbs.toFixed(1));
    addToOrder("Protein: " + protein.toFixed(1));
    addToOrder("Fat: " + fat.toFixed(1));
    addToOrder("Sugar: " + sugar.toFixed(1));
    addToOrder("Calories: " + calories.toFixed(1));
    
    let drinks = localStorage.getItem("creations-ls");
    drinks++;
    localStorage.setItem("creations-ls", drinks);
    choice1.focus();
});

function addToOrder(choice) {
    const listItem = document.createElement('li');
    const listText = document.createElement('span');  
    listItem.appendChild(listText);
    listText.textContent = choice;    
    list.appendChild(listItem);
}

function Get(url){
    var Httpreq = new XMLHttpRequest(); 
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var json_obj = JSON.parse(Get(url));
let i = 0;

function macronutrient(nutName, nut) {
    json_obj.forEach(obj => { 
        for (let property in obj) { 
            if (property == "name") { 
                if (arrayContains(obj[property],[choice1.value, choice2.value, choice3.value])) {
                    console.log("obj[property]==" + obj[property]);
                    switch (String(nutName)) {
                        case "carbohydrates":
                            carbs += parseFloat(obj["nutritions"][nutName]);
                            break;
                        case "protein":
                            protein += parseFloat(obj["nutritions"][nutName]);
                            break;
                        case "fat":
                            fat += parseFloat(obj["nutritions"][nutName]);
                            break;
                        case "sugar":
                            sugar += parseFloat(obj["nutritions"][nutName]);
                            break;
                        case "calories":
                            calories += parseFloat(obj["nutritions"][nutName]);
                            break;
                                                                    
                    }
                    console.log('obj["nutritions"]['+nutName+']==' + obj["nutritions"][nutName] + " (total:" + nut + ")");
                }
            }
        }
        return nut;
    });
}

function arrayContains(needle, arrhaystack)
{
    return (arrhaystack.indexOf(needle) > -1);
}

populateFruitList(choice1);
populateFruitList(choice2);
populateFruitList(choice3);

function populateFruitList(selectList) {
    for (i = 0; i < json_obj.length; i++) {
        var option = document.createElement("option");
        option.value = json_obj[i].name;
        option.text = json_obj[i].name;
        selectList.appendChild(option);
    }
}

