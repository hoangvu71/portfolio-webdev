///////////// Display /////////////
const projectOne = document.querySelector('.projectOne');
const projectTwo = document.querySelector('.projectTwo');
const projectThree = document.querySelector('.projectThree');

const container = document.querySelector('.container');
const portfolio = document.querySelector('.portfolio');
const skills = document.querySelector('.skills');

const arrayOne = Array.from(container.classList);
const arrayTwo = Array.from(portfolio.classList);
const arrayThree = Array.from(skills.classList);

function removeAndAddDisplay(remove,addOne, addTwo){
    remove.classList.remove('display-none');
    addOne.classList.add('display-none');
    addTwo.classList.add('display-none');
}

removeAndAddDisplay(container, portfolio, skills);

projectOne.addEventListener('click', () => {
    removeAndAddDisplay(container, portfolio,skills);
})
projectTwo.addEventListener('click', () => {
    removeAndAddDisplay(portfolio,skills, container);
})
projectThree.addEventListener('click', () => {
    removeAndAddDisplay(skills, portfolio,container);
})
/////////////Portfolio Components///////////
// <div class="box">
//      <a href={link to portfolio sites}>Site: Name</a>
// </div>

const data = [{
    name: "The Foodies",
    urllink: " https://ecstatic-hodgkin-2fc39e.netlify.com/"
},{
    name: "The Foodies",
    urllink: " https://ecstatic-hodgkin-2fc39e.netlify.com/"
},{
    name: "The Foodies",
    urllink: " https://ecstatic-hodgkin-2fc39e.netlify.com/"
},{
    name: "The Foodies",
    urllink: " https://ecstatic-hodgkin-2fc39e.netlify.com/"
}]

function createBox(obj){
    //Create Elements
    const box = document.createElement('div');
    const boxLink = document.createElement('a');

    //Create Classnames
    box.classList.add('box');
    //Create Path
    box.appendChild(boxLink);

    //Text Content
    boxLink.href = `${obj.urllink}`;
    boxLink.textContent = obj.name;

    return box;
}

const getBoxes = document.querySelector('.boxes');
data.forEach((element) => {
    getBoxes.appendChild(createBox(element));
})