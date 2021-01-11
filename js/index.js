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


let codeSnippet = document.querySelector('#cta-img')
codeSnippet.setAttribute('src', siteContent['cta']['img-src'])


/////////// NAVBAR ////////////
let navItems = document.querySelectorAll('nav a')
let navArray = Array.from(navItems)
navArray[0].textContent = siteContent['nav']['nav-item-1']
navArray[1].textContent = siteContent['nav']['nav-item-2']
navArray[2].textContent = siteContent['nav']['nav-item-3']
navArray[3].textContent = siteContent['nav']['nav-item-4']
navArray[4].textContent = siteContent['nav']['nav-item-5']
navArray[5].textContent = siteContent['nav']['nav-item-6']

///////////// HEADER TEXT AND BUTTON //////////////
document.querySelector('h1').innerHTML = 'DOM <br> IS <br> AWESOME '

let button = document.querySelector('button')
button.textContent = siteContent['cta']['button']

let middleImage = document.querySelector('#middle-img')
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])


          //////////// CONTACT ////////////
let contact = document.querySelector('.contact h4')
contact.textContent = siteContent['contact']['contact-h4']

let contactInfo = document.querySelectorAll('.contact p')
let contactArray = Array.from(contactInfo)
contactArray[0].textContent = siteContent['contact']['address']
contactArray[1].textContent = siteContent['contact']['phone']
contactArray[2].textContent = siteContent['contact']['email']

          ////////////////// COPYRIGHT /////////////
let copyright = document.querySelector('footer p')
copyright.textContent = siteContent['footer']['copyright']

          ////////// TOP CONTENT TITLES ////////////
let topContent = document.querySelectorAll('.top-content h4')
let topContentArray = Array.from(topContent)
topContentArray[0].textContent = siteContent['main-content']['features-h4']
topContentArray[1].textContent = siteContent['main-content']['about-h4']
          ////////// TOP CONTENT TEXT ////////////
let topContentText = document.querySelectorAll('.top-content p')
let topContentTextArray = Array.from(topContentText)
topContentText[0].textContent = siteContent['main-content']['features-content']
topContentText[1].textContent = siteContent['main-content']['about-content']
      ////////////////// BOTTOM TITLES ////////////////
let bottomTitles = document.querySelectorAll('.bottom-content h4')
let bottomTitlesArray = Array.from(bottomTitles)
bottomTitlesArray[0].textContent = siteContent['main-content']['services-h4']
bottomTitlesArray[1].textContent = siteContent['main-content']['product-h4']
bottomTitlesArray[2].textContent = siteContent['main-content']['vision-h4']

///////////////// BOTTOM CONTENT TEXT //////////////////

let bottomContent = document.querySelectorAll('.bottom-content p')
let bottomContentArray = Array.from(bottomContent)
bottomContentArray[0].textContent = siteContent['main-content']['services-content']
bottomContentArray[1].textContent = siteContent['main-content']['product-content']
bottomContentArray[2].textContent = siteContent['main-content']['vision-content']


        ///////////////// ADDING MORE ///////////    
let navTwo = [] 


const blogNav = document.createElement('a')
blogNav.textContent = 'Info'
blogNav.href = '#'
document.querySelector('nav').prepend(blogNav)
navTwo.push(blogNav)

let moreNav = document.createElement('a')
moreNav.textContent = 'More'
moreNav.href = '#'
document.querySelector('nav').appendChild(moreNav)
navTwo.push(moreNav)


arrayThree = navArray.concat(navTwo) 
for(let i = 0; i < arrayThree.length; i++){
  arrayThree[i].style.color = 'green'
}