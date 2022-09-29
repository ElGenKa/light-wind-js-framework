"use strict"

function lwPrepareElement(element) {
    if (!element)
        return element

    if (element.isInitLW)
        return element

    if (element.tagName === 'BODY' || element.tagName === 'HEAD' || element.tagName === 'HTML')
        return element

    element.val = (value = null) => {
        if (value) {
            element.value = value
            return element
        }
        return element.value
    }
    element.text = (text = null) => {
        if (text) {
            element.innerText = text
            return element
        }
        return element.text
    }
    element.html = (html = null) => {
        if (html) {
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
    element.attr = (attribute, value = null) => {
        if (value) {
            element.setAttribute(attribute, value)
            return element
        }
        return element.getAttribute(attribute)
    }
    element.attrs = (attributes) => {
        for (let key in attributes) {
            element.attr(key, attributes[key])
        }
        return element
    }
    element.addClass = (className) => {
        element.classList.add(className)
        return element
    }
    element.removeClass = (className) => {
        element.classList.remove(className)
        return element
    }
    element.hasClass = (className) => {
        if (element.classList.contains(className))
            return true
        return false
    }
    element.isInitLW = true
    return element
}

/* --------------------------------- */

function lwID(id) {
    return lwPrepareElement(document.getElementById(id))
}

function lwSelector(selector) {
    return lwPrepareElement(document.querySelector(selector)[0])
}

function lwName(name) {
    return lwPrepareElement(document.getElementsByName(name)[0])
}

function lwNames(name) {
    let elementsData = document.getElementsByName(name)
    for (let item of elementsData) {
        lwPrepareElement(item)
    }
    return elementsData
}

function lwSelectorAll(selector) {
    let elementsData = document.querySelectorAll(selector)
    for (let item of elementsData) {
        lwPrepareElement(item)
    }
    return elementsData
}

function lwTag(tag) {
    return lwPrepareElement(document.getElementsByTagName(tag)[0])
}

function lwTags(tag) {
    let elementsData = document.getElementsByTagName(tag)
    for (let item of elementsData) {
        lwPrepareElement(item)
    }
    return elementsData
}

function lwClass(_class) {
    return lwPrepareElement(document.getElementsByClassName(_class))
}

/* --------------------------------- */

function lwCreateElement(nodeName, ID, classArray, parent) {
    let newElement = document.createElement(nodeName)
    newElement.id = ID
    classArray.forEach(e => {
        newElement.classList.add(e)
    })
    if (parent) {
        if (lwIsStr(parent))
            parent = lwID(parent)
        if (parent.appendChild)
            parent.appendChild(newElement)
    }
    return lwPrepareElement(newElement)
}

function lwDiv(ID, classArray = [], parent = null) {
    return lwCreateElement('div', ID, classArray, parent)
}

function lwLabel(ID, classArray = [], parent = null) {
    return lwCreateElement('label', ID, classArray, parent)
}

function lwSmall(ID, classArray = [], parent = null) {
    return lwCreateElement('small', ID, classArray, parent)
}

function lwSpan(ID, classArray = [], parent = null) {
    return lwCreateElement('span', ID, classArray, parent)
}

function lwUl(ID, classArray = [], parent = null) {
    return lwCreateElement('ul', ID, classArray, parent)
}

function lwImg(ID, classArray = [], parent = null) {
    return lwCreateElement('img', ID, classArray, parent)
}

function lwLi(ID, classArray = [], parent = null) {
    return lwCreateElement('li', ID, classArray, parent)
}

function lwOl(ID, classArray = [], parent = null) {
    return lwCreateElement('ol', ID, classArray, parent)
}

function lwP(ID, classArray = [], parent = null) {
    return lwCreateElement('p', ID, classArray, parent)
}

function lwH1(ID, classArray = [], parent = null) {
    return lwCreateElement('h1', ID, classArray, parent)
}

function lwH2(ID, classArray = [], parent = null) {
    return lwCreateElement('h2', ID, classArray, parent)
}

function lwH3(ID, classArray = [], parent = null) {
    return lwCreateElement('h3', ID, classArray, parent)
}

function lwH4(ID, classArray = [], parent = null) {
    return lwCreateElement('h4', ID, classArray, parent)
}

function lwH5(ID, classArray = [], parent = null) {
    return lwCreateElement('h5', ID, classArray, parent)
}

function lwH6(ID, classArray = [], parent = null) {
    return lwCreateElement('h6', ID, classArray, parent)
}

function lwA(ID, classArray = [], parent = null) {
    return lwCreateElement('a', ID, classArray, parent)
}

function lwAddress(ID, classArray = [], parent = null) {
    return lwCreateElement('address', ID, classArray, parent)
}

function lwAbbr(ID, classArray = [], parent = null) {
    return lwCreateElement('abbr', ID, classArray, parent)
}

function lwB(ID, classArray = [], parent = null) {
    return lwCreateElement('B', ID, classArray, parent)
}

function lwBr(ID, classArray = [], parent = null) {
    return lwCreateElement('br', ID, classArray, parent)
}

function lwButton(ID, classArray = [], parent = null) {
    return lwCreateElement('button', ID, classArray, parent)
}

function lwDel(ID, classArray = [], parent = null) {
    return lwCreateElement('del', ID, classArray, parent)
}

function lwEm(ID, classArray = [], parent = null) {
    return lwCreateElement('em', ID, classArray, parent)
}

function lwI(ID, classArray = [], parent = null) {
    return lwCreateElement('i', ID, classArray, parent)
}

function lwInput(ID, classArray = [], parent = null) {
    return lwCreateElement('input', ID, classArray, parent)
}

function lwTextArea(ID, classArray = [], parent = null) {
    return lwCreateElement('textarea', ID, classArray, parent)
}

function lwTable(ID, classArray = [], parent = null) {
    return lwCreateElement('table', ID, classArray, parent)
}

function lwTBody(ID, classArray = [], parent = null) {
    return lwCreateElement('tbody', ID, classArray, parent)
}

function lwTHead(ID, classArray = [], parent = null) {
    return lwCreateElement('thead', ID, classArray, parent)
}

function lwTd(ID, classArray = [], parent = null) {
    return lwCreateElement('td', ID, classArray, parent)
}

function lwTr(ID, classArray = [], parent = null) {
    return lwCreateElement('tr', ID, classArray, parent)
}

/* --------------------------------- */

function lwScrollTo(element, offset = 140, behavior = 'smooth') {
    if (lwIsStr(element))
        element = lwID(element)

    if (!lwIsNum(offset))
        offset = parseInt(offset)

    const typesBehavior = ['smooth', 'instant', 'auto']
    if (typesBehavior.indexOf(behavior) === -1)
        behavior = 'auto'

    if (element) {
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition - offset
        window.scrollBy({
            top: offsetPosition,
            behavior
        });
    }
}

function lwIncludeJS(src){
    const htmlSctring = `/n<script src="${src}"></script>`
    _lwIncludeProcessor(htmlSctring)
}

function lwIncludeCSS(src){
    const htmlSctring = `/n<link rel="stylesheet" href="${src}">`
    _lwIncludeProcessor(htmlSctring)
}

function _lwIncludeProcessor(html){
    const header = document.getElementsByTagName('head')
    if(header.length > 0){
        header[0].innerHTML += html
    } else {
        const body = document.getElementsByTagName('body')
        if(body.length > 0)
            body[0].innerHTML += html
        else
            console.error('head and body not found')
    }
}

/* --------------------------------- */

function lwIsNum(data) {
    return typeof data === 'number'
}

function lwIsStr(data) {
    return typeof data === 'string'
}

function lwIsObj(data) {
    return typeof data === 'object'
}

function lwIsFunc(data) {
    return typeof data === 'function'
}

function lwIsUnd(data) {
    return typeof data === 'undefined'
}