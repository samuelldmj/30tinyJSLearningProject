const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');

// highlight.classList.add('highlight');
// document.body.append(highlight);

// function highlightLink() {
//     const linkCoords = this.getBoundingClientRect();
//     console.log(linkCoords);

//     const coords = {
//         width: linkCoords.width,
//         height: linkCoords.height,
//         top: linkCoords.top + window.scrollY, 
//         left: linkCoords.left + window.scrollX 
//     };

//     highlight.style.width = `${coords.width}px`;
//     highlight.style.height = `${coords.height}px`;
//     highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
// }

// triggers.forEach(aElement => aElement.addEventListener('mouseenter', highlightLink));


//using delegation
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink(e) {
    
    if (e.target.tagName.toLowerCase() === 'a') {
        const linkCoords = e.target.getBoundingClientRect();
        console.log(linkCoords);

        const coords = {
            width: linkCoords.width,
            height: linkCoords.height,
            top: linkCoords.top + window.scrollY, 
            left: linkCoords.left + window.scrollX 
        };

        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;
        highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    }
}

document.body.addEventListener('mouseenter', highlightLink, true);