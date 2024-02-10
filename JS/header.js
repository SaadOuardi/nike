import data from "./database.js";

// call the company array
let company = data.company;


// COMPANY NAME :
const CompanyName = document.querySelectorAll('.company-name');

CompanyName.forEach(element =>{
    element.textContent = company.name;
})


// COPANY LOGO IMG :

const companyLogoHome = document.querySelectorAll('.company-image-index');
console.log(companyLogoHome)
companyLogoHome.forEach(img => {
    img.setAttribute('src', './IMG/company/company-logo (3).webp');
});



const companyLogoSubPages = document.querySelectorAll('.company-image');
companyLogoSubPages.forEach(img => {
    img.setAttribute('src', '../IMG/company/company-logo (3).webp');
});













console.log(document.getElementsByClassName('vertical-menu'))

