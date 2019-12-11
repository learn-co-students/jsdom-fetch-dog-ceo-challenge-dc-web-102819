console.log('%c HI', 'color: firebrick')


// Challenge 1 

document.addEventListener("DOMContentLoaded", function() {
    fetchdogs() 
    getBreeds()
    selectListener() 
     
  
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


 // challenge 4 


 function selectListener() {
    const dropdown = document.querySelector("#breed-dropdown")
    dropdown.addEventListener('change', outputBreedList)
 }


 function outputBreedList(event){
    
      let letter = event.target.value 
      let allBreeds = document.querySelector("ul")
      for (i = 0 ; i < allBreeds.children.length ; i++) {
         allBreeds.children[i].style.display = "list-item" 
        if (allBreeds.children[i].innerText[0] === letter) {   

        } else {
            allBreeds.children[i].style.display= "none"
        }
      }
 
 }


