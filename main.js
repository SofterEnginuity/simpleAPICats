
document.querySelector('button').addEventListener('click', getCats)

function getCats(){


const url = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`
      
fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)

        document.querySelector('img').src = data[0].url
    })

}

// // Bpbs Burgers

// document.querySelector('button').addEventListener('click', getWeather)

// function getWeather(){
//     const userInput = document.querySelector('input').value

// const url = `https://bobsburgers-api.herokuapp.com`
      
// fetch(url)
//     .then(res => res.json())
//     .then(data =>{
//         console.log(data)

//         document.querySelector('h2').innerText = data.drinks[0].strDrink
//         document.querySelector('img').src = data.drinks[0].strDrinkThumb
        
//     })

// }