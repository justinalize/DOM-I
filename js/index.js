const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let codeSnip = document.querySelector('#cta-img')
codeSnip.setAttribute('src', siteContent['cta']['img-src'])

let centerImg = document.querySelector('#middle-img')
centerImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let theButton = document.querySelector('button')
theButton.textContent = siteContent['cta']['button']

// NAVBAR 
let Items = document.querySelectorAll('nav a')
let navArray = Array.from(Items)
navArray[0].textContent = siteContent['nav']['nav-item-1']
navArray[1].textContent = siteContent['nav']['nav-item-2']
navArray[2].textContent = siteContent['nav']['nav-item-3']
navArray[3].textContent = siteContent['nav']['nav-item-4']
navArray[4].textContent = siteContent['nav']['nav-item-5']
navArray[5].textContent = siteContent['nav']['nav-item-6']

// DOM IS AWESOME TEXT

document.querySelector('h1').innerHTML = 'DOM <br> IS <br> AWESOME '


// Contact INFO\
let contactInfo = document.querySelector('.contact h4')
contactInfo.textContent = siteContent['contact']['contact-h4']

let contactText = document.querySelectorAll('.contact p')
let contactArray = Array.from(contactText)
contactArray[0].textContent = siteContent['contact']['address']
contactArray[1].textContent = siteContent['contact']['phone']
contactArray[2].textContent = siteContent['contact']['email']

// top content titles

let mainTitles = document.querySelectorAll('.top-content h4')
let mainTitleArray = Array.from(mainTitles) // grouping all h4s that are in the top content and then making the content that was grouped into an actual array 
mainTitleArray[0].textContent = siteContent['main-content']['features-h4']
mainTitleArray[1].textContent = siteContent['main-content']['about-h4']
// assigning each index of the array a different piece of content

// top content text

let mainText = document.querySelectorAll('.top-content p')
let mainTextArray = Array.from(mainText)
// grouping all p tags with the class of top content then making them into an actual array
mainTextArray[0].textContent = siteContent['main-content']['features-content']
mainTextArray[1].textContent = siteContent['main-content']['about-content']

// bottom content titles

let bottomTitles = document.querySelectorAll('.bottom-content h4')
let bottomTitlesArray = Array.from(bottomTitles)
// adding all h4s with the class of bottom content to a nodelist then converting that nodelist to an array 
bottomTitlesArray[0].textContent = siteContent ['main-content']['services-h4']

bottomTitlesArray[1].textContent = siteContent ['main-content']['product-h4']

bottomTitlesArray[2].textContent = siteContent ['main-content']['vision-h4']
// changing the values of each array item 

// bottom content text

let bottomContent = document.querySelectorAll('.bottom-content p')
let bottomContentArray = Array.from(bottomContent)
// adding all p tags with the class of bottom-content to a node list then changing the node list into an array so i can edit the values
bottomContentArray[0].textContent = siteContent['main-content']['services-content']
bottomContentArray[1].textContent = siteContent['main-content']['product-content']
bottomContentArray[2].textContent = siteContent['main-content']['vision-content']
// assigning the values of the item in the array to equal the site content given for that specific section

let footerCopyright = document.querySelector('footer p')
footerCopyright.textContent = siteContent['footer']['copyright']
// crearting a variable and making it equal to the footer p tag and then assigning that textcontent equal to the content given for the assignmenmt

// ADD NEW CONTENT
let navTwo = [] // creating empty array so i can push the two arrays into one array and change the color 

const blogNav = document.createElement('a')
// creating a var called blogNav and setting it as an anchor tag BUT doesnt put it on the page, its just in memory
blogNav.textContent = 'Blog'
// making the variable equal to Blog which is the text we will actuallty see on the page
blogNav.href = '#'
// linking  blog 
document.querySelector('nav').prepend(blogNav)
// putting the blogNav on the page in FRONT of its parent 
navTwo.push(blogNav)
 // pushing item into arrayTwo



// ADDING THE SECOND NEW NAV ITEM


const moreNav = document.createElement('a')
// creating a var called moreNav and setting it as an anchor tag BUT doesnt put it on the page, its just in memory
moreNav.textContent = 'More'
// making the variable equal to More which is the text we will actuallty see on the page
moreNav.href = '#'
// linking  More  
document.querySelector('nav').appendChild(moreNav)
// putting the moreNav on the page BEHIND its parent 
navTwo.push(moreNav)
 // pushing item into arrayTwo

arrayThree = navArray.concat(navTwo) // joining navTwo and navArray into one array and then changing the color
// MAKING NAV COLOR DIFFERENT

//nav.style.color = 'green'
//Items.style.color = 'green'
for(let i = 0; i < arrayThree.length; i++){
  arrayThree[i].style.color = 'green'
}