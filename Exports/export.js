



//append element
function ElementAppend(element) {
    element.append(arguments)
}

//remove class
function removeClasses(element, args) {
    element.classList.remove(args)
}

//add class
function addClasses(element, [args]) {
    element.classList.add(args)
}

//remove element from document
function documentRemove(element) {
    document.body.remove(element)
}

//toggle a class
function toggleClasses(element, classes) {
    element.classList.toggle(classes)
}


class addLoopedElament {
    constructor(element, array = []) {
        this.element = element
        this.array = array

        this.random = Math.random() * this.array.length
        this.applyFunc = function() {
            array.forEach(arr => {
                console.log(arr);
                console.log(this.array[0])
            })
        }
    }
}


export { ElementAppend, removeClasses, documentRemove, addClasses, toggleClasses, addLoopedElament }