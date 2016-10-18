// 1. Count the number of records in the "Current Quarter Details" table.
var detailsRecords = document.querySelectorAll('tbody > tr')
    console.log(detailsRecords.length)

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
var images = document.querySelectorAll('img')
images.forEach(function(image, i){
    var alt = ['winter', 'spring', 'summer', 'fall']
    image.src = "http://unsplash.it/400?image=" + (i + 1)
    image.setAttribute('alt', alt[i] + ' image')
})
console.log(images)

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.

var randomNumbers = document.querySelectorAll('.text-muted')
    randomNumbers.forEach(function(randomNumber) {
        randomNumber.innerHTML = accounting.formatMoney(Math.round(Math.random() * 1000))
    })
console.log(randomNumbers)
// 4. Change the currently selected left side menu item from Overview to Reports.

var selectedItems = document.querySelectorAll('.nav-sidebar > li')
    selectedItems.forEach(function(selectedItem) {
        selectedItem.classList.remove('active')
    if (selectedItem.textContent === 'Reports')
        selectedItem.classList.add('active')
    })
console.dir(selectedItems)

// 5. Set the default search input value to "Q4 sales".
var searchInput = document.querySelectorAll('.form-control')
    searchInput.forEach(function(input) {
        input.setAttribute('placeholder', 'Q4 sales')
    })

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.

var tableHovers = document.querySelectorAll('table')
tableHovers.forEach(function(tableHover) {
    tableHover.classList.add('table-hover')
})
console.log(tableHovers)

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>

var successClasses = document.querySelectorAll('tbody > tr')
    successClasses[6].classList.add('success')
    successClasses[7].classList.add('success')
    successClasses[8].classList.add('success')
    successClasses[9].classList.add('success')

console.log(successClasses)

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.

var headerNames = document.querySelectorAll('tr > th')
headerNames.forEach(function(headerName, i){
    var titles = ['ID', 'First Name', 'Last Name', 'Department', 'Client']
    headerName.innerHTML = titles[i]
})
console.dir(headerNames)

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

var objectArrays = document.querySelectorAll('tbody > tr')
var array = []
objectArrays.forEach(function(objectArray) {
    var object = {
        id: Number(objectArray.children[0].innerHTML.replace(',', '')),
        firstName: objectArray.children[1].innerHTML,
        lastName: objectArray.children[2].innerHTML,
        department: objectArray.children[3].innerHTML,
        client: objectArray.children[4].innerHTML
    }
    array.push(object)
})
console.log(array)

// 10. Make each word in the table capitalized.
var words = document.querySelectorAll('tbody tr > td')
words.forEach(function(word) {
    word.style.textTransform = "capitalize"
})
console.log(words)
