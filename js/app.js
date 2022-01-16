function makeRed(node) {
    node.style.color = 'red'
}

if (window.location.href == 'https://nikita.mihailov.spb.ru/') {
    makeRed(document.getElementById(1))
}
if(window.location.href == 'https://nikita.mihailov.spb.ru/portfolio/'){
    makeRed(document.getElementById(2))
}
if(window.location.href == 'https://nikita.mihailov.spb.ru/contacts/'){
    makeRed(document.getElementById(4))
}

