"use strict"

function _prepareReturnElement(element){
    element.val = (value = null) => {
        if(value)
            element.value = value
        return element.value 
    }
    element.text = (text = null) => {
        if(text)
            element.innerText = text
        return element.text
    }
    element.html = (html = null) => {
        if(html)
            element.innerHTML = html
        return element.html
    }
    return element
}

function lwID(id){
    return _prepareReturnElement(document.getElementById(id))
}

function lwSelector(selector){
    return _prepareReturnElement(document.querySelector(selector))
}

function lwSelectorAll(selector){
    return _prepareReturnElement(document.querySelectorAll(selector))
}

function lwClass(_class){
    return _prepareReturnElement(document.getElementsByClassName(_class))
}

function _lwCreateElement(nodeName, ID, classArray, parent){
    let newElement = document.createElement(nodeName)
    newElement.id = ID
    classArray.forEach(e => {
        newElement.classList.add(e);
    })
    if(parent){
        if( typeof parent === 'string' )
            parent = lwID(parent)
        if(parent.appendChild)
            parent.appendChild(newElement)
    }
    return _prepareReturnElement(newElement)
}

function lwDiv(ID, classArray = [], parent = null){
    return _lwCreateElement('div', ID, classArray, parent)
}
