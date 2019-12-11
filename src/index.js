console.log('%c HI', 'color: firebrick')


// Challenge 1 

document.addEventListener("DOMContentLoaded", function() {
    fetchdogs() 
    getBreeds()
     
  
})

function fetchdogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(dogArray => {
        console.log(dogArray)
        for (let i = 0 ; i < dogArray.message.length ; i++) {
            makeDog(dogArray.message[i])
        }
    })  
}


function makeDog(dog) {
    let dogcontainer = document.querySelector("#dog-image-container")
    // let dogdiv = document.createElement("div")
    // dogcontainer.appendChild(dogdiv) 
    let dogimage = document.createElement("img") 
    dogimage.src = dog
    dogcontainer.appendChild(dogimage) 
    dogimage.style.height = "200px"
} 


// Challenge 2 AND Challenge 3 

 function getBreeds() {
 	fetch('https://dog.ceo/api/breeds/list/all')
 	.then(response => response.json())
 	.then(dogBreeds =>{
  		outputBreeds(dogBreeds)
 	})
 }

 function outputBreeds(dogBreeds) {
 	let arrayOfBreeds = Object.keys(dogBreeds.message)
 	let ulEl = document.querySelector("#dog-breeds")
 	arrayOfBreeds.forEach(breed => {
 		let breedEl = document.createElement("li")
 		breedEl.innerText = breed
         ulEl.appendChild(breedEl)
         breedEl.addEventListener("click" , changeColor)
 	})
 }


 function changeColor(event) {
    event.target.style.color =  "red" 
 }






