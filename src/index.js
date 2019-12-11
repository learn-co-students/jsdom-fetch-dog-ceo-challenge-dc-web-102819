const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', allChallengesSolved())


function allChallengesSolved() {
  dogFetch();
  dogFetch2();
  setTimeout(addDropdownListener, 0)
}


function dogFetch() {
  return fetch(imgUrl)
  .then((response) => response.json())
  .then((data) => loadDogsImgs(data["message"]));
}

function loadDogsImgs(data) {
  const container = document.getElementById('dog-image-container')
  // console.log(data)
  // console.log(container)
  data.forEach ( dog => {
    let imgTag = document.createElement('img')
    imgTag.src = dog
    container.appendChild(imgTag)
  })
}

function dogFetch2() {
  return fetch(breedUrl)
  .then((response) => response.json())
  .then((data) => loadDogBreeds(data["message"]));
}

function loadDogBreeds(data) {
  const ul = document.getElementById('dog-breeds');

  for (let breed in data) {
    if (data[breed].length === 0) {
      let li = document.createElement('li')
      li.addEventListener('click', changeColor)
      li.innerText = breed
      ul.appendChild(li)
    }

    else if (data[breed].length > 0) {
      data[breed].forEach ( subbreed => {
        let li = document.createElement('li')
        li.addEventListener('click', changeColor)
        li.innerText = `${subbreed} ${breed}`
        ul.appendChild(li)
      })
    }

    else {
      let li = document.createElement('li');
      li.innerText = "something went wrong"
      ul.appendChild(li)
    }
  }
}

function changeColor(event) {
  event.target.style.color = 'red'
}

function addDropdownListener() {
  let dropdown = document.getElementById('breed-dropdown')
  dropdown.addEventListener('change', filterList)
}

function filterList(event) {
  const letter = event.target.value
  let list = document.getElementById("dog-breeds")
  let lis = list.children

  let liArray = Array.from(lis)

  debugger

  goodElements = liArray.filter(li => li.innerText.charAt(0) === letter)

  debugger

  badElements = liArray.filter(li => li.innerText.charAt(0) !== letter)

  goodElements.forEach ( li => {
    li.style.display = "list-item"
  })

  badElements.forEach ( li => {
    li.style.display = "none"
  })


  debugger



  // i = 0
  // while (i < lis.length) {
  //   lis[i].style.visibility = "visible"
  //
  //   if (lis[i].innerText.charAt(0) !== letter && lis[i].style.visibility !== "hidden") {
  //     lis[i].style.visibility = "hidden"
  //     lis[i].parentNode.appendChild(lis[i])
  //   }
  //   else if (lis[i].innerText.charAt(0) === letter)
  //     { lis[i].style.visibility = "visible"
  //     i++
  //   } else {
  //   i++
  //   }
  // }
}

  // for (let i = 0; i < lis.length; i++) {
  //   lis[i].style.visibility = "visible"
  //   if (lis[i].innerText.charAt(0) !== letter) {
  //     lis[i].style.visibility = "hidden"
  //     lis[i].parentNode.appendChild(lis[i])
  //     // i--
  //   } else
  //   { lis[i].style.visibility = "visible" }
  // }

let tempArray = []

function filterList2(event) {
  const letter = event.target.value
  let list = document.getElementById("dog-breeds")
  let lis = list.children

  for (let i = 0; i < lis.length; i++) {
    // lis[i].style.visibility = "visible"
    list.push(tempArray)

    if (lis[i].innerText.charAt(0) !== letter) {
      tempArray.push(lis[i])
      lis[i].remove()
    }
  debugger
  }
}
