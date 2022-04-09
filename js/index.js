const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    //change the theme of the website
    document.body.classList.toggle('dark');
});


const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
    })
});

