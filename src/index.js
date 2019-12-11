console.log('%c HI', 'color: firebrick')


// Challenge 1 

document.addEventListener("DOMContentLoaded", function() {

    fetchdogs() 
     
  
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
    let dogdiv = document.createElement("div")
    dogcontainer.appendChild(dogdiv) 
    let dogimage = document.createElement("img") 
    dogimage.src = dog
    dogdiv.appendChild(dogimage) 
} 


// Challenge 2 

