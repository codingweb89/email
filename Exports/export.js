




function ElementAppend(element) {
    element.append(arguments)
}

function removeClasses(element, args) {
    element.classList.remove(args)
}

function addClasses(element, [args]) {
    element.classList.add(args)
}

function documentRemove(element) {
    document.body.remove(element)
}

function toggleClasses(element, classes) {
    element.classList.toggle(classes)
}



export { ElementAppend, removeClasses, documentRemove, addClasses, toggleClasses }