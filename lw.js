"use strict"

function _prepareReturnElement(element) {
    if(!element)
        return element

    if(element.isInitLW)
        return element

    element.val = (value = null) => {
        if (value){
            element.value = value
            return element
        }
        return element.value
    }
    element.text = (text = null) => {
        if (text){
            element.innerText = text
            return element
        }
        return element.text
    }
    element.html = (html = null) => {
        if (html){
            element.innerHTML = html
            return element
        }
        return element.html
    }
    element.hide = () => {
        element.style.display = 'none'
        return element
    }
    element.show = () => {
        element.style.display = 'block'
        return element
    }
    element.isInitLW = true
    return element
}

/* --------------------------------- */

function lwID(id) {
    return _prepareReturnElement(document.getElementById(id))
}

function lwSelector(selector) {
    return _prepareReturnElement(document.querySelector(selector)[0])
}

function lwName(name){
    return _prepareReturnElement(document.getElementsByName(name)[0])
}

function lwNames(name){
    let elementsData = document.getElementsByName(name)
    for (let item of elementsData) {
        _prepareReturnElement(item)
    }
    return elementsData
}

function lwSelectorAll(selector) {
    let elementsData = document.querySelectorAll(selector)
    for (let item of elementsData) {
        _prepareReturnElement(item)
    }
    return elementsData
}

function lwTag(tag){
    return _prepareReturnElement(document.getElementsByTagName(tag)[0])
}

function lwTags(tag){
    let elementsData = document.getElementsByTagName(tag)
    for (let item of elementsData) {
        _prepareReturnElement(item)
    }
    return elementsData
}

function lwClass(_class) {
    return _prepareReturnElement(document.getElementsByClassName(_class))
}

/* --------------------------------- */

function _lwCreateElement(nodeName, ID, classArray, parent) {
    let newElement = document.createElement(nodeName)
    newElement.id = ID
    classArray.forEach(e => {
        newElement.classList.add(e);
    })
    if (parent) {
        if (lwIsStr(parent))
            parent = lwID(parent)
        if (parent.appendChild)
            parent.appendChild(newElement)
    }
    return _prepareReturnElement(newElement)
}

function lwDiv(ID, classArray = [], parent = null) {
    return _lwCreateElement('div', ID, classArray, parent)
}

function lwLabel(ID, classArray = [], parent = null) {
    return _lwCreateElement('label', ID, classArray, parent)
}

function lwSmall(ID, classArray = [], parent = null) {
    return _lwCreateElement('small', ID, classArray, parent)
}

function lwUl(ID, classArray = [], parent = null) {
    return _lwCreateElement('ul', ID, classArray, parent)
}

function lwLi(ID, classArray = [], parent = null) {
    return _lwCreateElement('li', ID, classArray, parent)
}

function lwP(ID, classArray = [], parent = null) {
    return _lwCreateElement('p', ID, classArray, parent)
}

/* --------------------------------- */

let lwConfig = {
    useStyles: false
}

function lwUseStyles(isUse = true){
    lwConfig.useStyles = isUse
}

/* --------------------------------- */

function lwScrollTo(element, offset = 140, behavior = 'smooth'){
    if(lwIsStr(element))
        element = lwID(element)

    if(!lwIsNum(offset))
        offset = parseInt(offset)

    const typesBehavior = ['smooth', 'instant', 'auto']
    if(typesBehavior.indexOf(behavior) === -1)
        behavior = 'auto'

    if(element){
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset;
        window.scrollBy({
            top: offsetPosition,
            behavior
        });
    }
}

/* --------------------------------- */

function lwIsNum(data){
    return typeof data === 'number'
}

function lwIsStr(data){
    return typeof data === 'string'
}

function lwIsObj(data){
    return typeof data === 'object'
}

function lwIsFunc(data){
    return typeof data === 'function'
}

function lwIsUnd(data){
    return typeof data === 'undefined'
}