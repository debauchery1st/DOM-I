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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// task 1
const nava = document.querySelectorAll("nav a"); // navigation
const circleImage = document.getElementById("cta-img"); // circular
const middleImage = document.getElementById("middle-img"); // rectangular
const button = document.querySelector("button"); // get started
const firstH1 = document.getElementsByTagName("h1")[0]; // dom is awesome
// task1 main-content helpers
const mainContent = document.getElementsByClassName("text-content"); // collection
const contentKeys = ["features", "about", "services", "product", "vision"]; // keys
const selectFromMain = (itemNum, tagName, idx=0) => mainContent[itemNum].getElementsByTagName(tagName)[idx]; // lambda
const theSpot = (x=0, marks="h4") => `${contentKeys[x]}-${(marks == "p") ? "content":marks}`;  //lambda

// task1 contact information
const contactSec = document.getElementsByClassName('contact')[0]; // collection
const contactTitle = contactSec.getElementsByTagName("h4")[0];
const contactP = contactSec.getElementsByTagName("p");
const contactAddress = contactP[0];
const contactPhoneNumber = contactP[1];
const contactEmail = contactP[2];

// task1 footer
const copyrightInfo = document.querySelector("footer p");

// task 2

nava.forEach((item, idx) => item.innerText = siteContent["nav"][`nav-item-${1 + idx}`]);
circleImage.src = "img/header-img.png";
middleImage.src = "img/mid-page-accent.jpg";
firstH1.innerText = "DOM\n Is\n Awesome";
button.innerText = "Get Started";

contentKeys.forEach((x, y) => {
  const h4Element = selectFromMain(y, "h4");
  const pElement = selectFromMain(y, "p");
  const pKey = theSpot(y, "p");
  h4Element.innerText = x;
  pElement.innerText = siteContent['main-content'][pKey];
});

contactTitle.innerText = siteContent['contact']['contact-h4'];
contactAddress.innerText = siteContent['contact']['address'];
contactPhoneNumber.innerText = siteContent['contact']['phone'];
contactEmail.innerText = siteContent['contact']['email'];
copyrightInfo.innerText = siteContent['footer']['copyright'];
