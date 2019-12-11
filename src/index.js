document.addEventListener('DOMContentLoaded', function(){
    fetchImages(); fetchBreeds();
    document.getElementById('breed-dropdown').addEventListener("change", filterDogNames)
})

function fetchImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response  => response.json())
    .then(json => displayImages(json))
}

function fetchBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(json => displayBreedName(json))
}

function displayImages(json){
    json.message.forEach(image => {
        let imageContainer = document.getElementById('dog-image-container')
        let imageElement = document.createElement('img')
        imageElement.src = image
        imageElement.style.width = '400px'
        imageElement.style.display = 'block'
        imageContainer.appendChild(imageElement)
    });
}

function displayBreedName(json){
    Object.keys(json.message).forEach(name => {
        let dogList = document.getElementById('dog-breeds')
        let dogItem = document.createElement('li')
        dogItem.addEventListener('click', addColorToItem)
        dogItem.innerText = name
        dogList.appendChild(dogItem)

        let breeds = json.message[name]

        if (breeds.length > 0){
            let breedList = document.createElement('ul')
            for(const breed of breeds){
                let breedItem = document.createElement('li')
                breedItem.innerText = breed
                breedList.appendChild(breedItem)
            }
            dogItem.appendChild(breedList)
        }
    })
}

function addColorToItem (event){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.color = `#${randomColor}`
}

function filterDogNames (){
    let filterValue = document.getElementById('breed-dropdown').value
    let listOfBreeds = document.getElementById('dog-breeds')

    for(i=0; i<listOfBreeds.childElementCount; i++){
        let child = listOfBreeds.children[i]
        let childText = child.innerText
        if (filterValue === "") {
            child.style.display = "list-item"
        } else if (childText[0] !== filterValue) {
            child.style.display = "none"
        } else {
            child.style.display = "list-item"
        }
    }
}


console.log('%c HI', 'color: firebrick')
