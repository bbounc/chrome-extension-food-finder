
const blythfood = [

"fWorld Famous Fries"
]

const  yesfood = [
"apple"
]
const food = document.getElementsByTagName("h1")
for (let i = 0; i < food.length; i++){
    if (blythfood.includes(food[i])){
yesfood.push(food[i])
    }
}


for(let i = 0; i < yesfood.length; i++){
    alert(yesfood[i])
    }