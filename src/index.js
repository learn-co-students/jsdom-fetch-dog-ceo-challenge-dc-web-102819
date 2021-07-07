document.addEventListener("DOMContentLoaded", function() {
    addingSelectEventListener()

  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(dogs => {
      dogs.message.forEach((url) =>
       displayImage(url))
    }
)
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {Object.keys(data.message).forEach((breed) => 
        listBreeds(breed))}
     )
     
  })


function displayImage(url) {
    
    let imageSelector = document.querySelector("#dog-image-container")
    let breedDiv = document.createElement('div')
    imageSelector.appendChild(breedDiv)
    let animalImageEl = document.createElement('img')
    animalImageEl.src = url
    breedDiv.appendChild(animalImageEl)
    animalImageEl.style.width = '10px'

}

function listBreeds(breed){

    let ulEl = document.querySelector('#dog-breeds')
    let liEl = document.createElement('li')
    liEl.innerText = breed
    liEl.addEventListener('click', colorChange)
    ulEl.appendChild(liEl)

}

function colorChange(event) {
    event.preventDefault()
    event.currentTarget.style.color = '#0000cd' 
}


function addingSelectEventListener(){
    let breedList = document.querySelector('#breed-dropdown')
   
    breedList.addEventListener('click', grabLetter)
}

function grabLetter(event){
    event.preventDefault()
    let input = event.target.value
    let breedList = document.querySelectorAll('li')
    const tester = breedList.forEach( (breed) => {if (breed.innerText.charAt(0) == input){
       
       breedList.innerText =  breed.innerText
    }})
  debugger
// breedFirstLetter == letter 
// return breed
}

// addingSelectEventListener()