// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded",function(){
    fetchPictures()
    fetchBreed()
})

function renderDog(imgUrl){
    let container = document.getElementById("dog-image-container")
    let divide = document.createElement('div')
    container.appendChild(divide)
    let dogImage = document.createElement("img")
    dogImage.src = imgUrl
   
    divide.appendChild(dogImage)
}

function listBreed(breed){
    let ulEl = document.getElementById("dog-breeds")
    let liEl = document.createElement("li")
    liEl.innerText = breed
    ulEl.appendChild(liEl)
}

function fetchPictures(){
    fetch(imgUrl)
    .then(respose => respose.json())
    .then(dogImages => {
        dogImages.message.forEach((imgUrl) => {
            renderDog(imgUrl)
            
        })
    })
    
}

function fetchBreed(){

    fetch(breedUrl)
    .then(respose => respose.json())
    .then (dogBreed => {
        
        Object.keys(dogBreed.message).forEach((breed) => {
            listBreed(breed)
        })
    })
}



// function fetchImage(){
//     fetch(imgUrl)
//     .then(response => response.json())
//     .then(dogImage => {
//         dogImage.forEach((dog) => {
//         renderDog(dog)
//         })
//     })
// }

