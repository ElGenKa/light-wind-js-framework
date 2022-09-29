"use strict"

/**
 * @name Light Wind
 * @author Denis (ElGen) Ivanov
 * @version 0.1
 * @description dom library
 * @git https://github.com/ElGenKa/light-wind-js-library
 */

/**
 * Инициализирует дополнительный функционал элемента
 * @param element
 * @returns {HTMLElement}
 */
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
        return element.classList.contains(className);

    }
    element.isInitLW = true
    return element
}

/* Функции взаимодействия            */

/* --------------------------------- */

/**
 * Возвращает элемент по его ID
 * @param id {String}
 * @returns {{object}|*}
 */
function lwID(id) {
    return lwPrepareElement(document.getElementById(id))
}

/**
 * Возвращает элемент по селектору
 * @param selector {String}
 * @returns {HTMLElement}
 */
function lwSelector(selector) {
    return lwPrepareElement(document.querySelector(selector)[0])
}

/**
 * Возвращает первый элемент по его имени
 * @param name {String}
 * @returns {HTMLElement}
 */
function lwName(name) {
    return lwPrepareElement(document.getElementsByName(name)[0])
}

/**
 * Возвращает элементы по имени
 * @param name {String}
 * @returns {NodeListOf<HTMLElement>}
 */
function lwNames(name) {
    let elementsData = document.getElementsByName(name)
    for (let item of elementsData) {
        lwPrepareElement(item)
    }
    return elementsData
}

/**
 *
 * @param selector {String}
 * @returns {NodeListOf<HTMLElement>}
 */
function lwSelectorAll(selector) {
    let elementsData = document.querySelectorAll(selector)
    for (let item of elementsData) {
        lwPrepareElement(item)
    }
    return elementsData
}

/**
 * Возвращает первый элемент по его имени тэга
 * @param tag {String}
 * @returns {HTMLElement}
 */
function lwTag(tag) {
    return lwPrepareElement(document.getElementsByTagName(tag)[0])
}

/**
 * Возвращает элементы по имени
 * @param tag {String}
 * @returns {HTMLCollectionOf<HTMLElement>}
 */
function lwTags(tag) {
    let elementsData = document.getElementsByTagName(tag)
    for (let item of elementsData) {
        lwPrepareElement(item)
    }
    return elementsData
}

/**
 * Возвращает эементы по имени класса
 * @param _class {String}
 * @returns {HTMLCollectionOf<HTMLElement>}
 */
function lwClass(_class) {
    let elementsData = document.getElementsByClassName(_class)
    for (let item of elementsData) {
        lwPrepareElement(item)
    }
    return elementsData
}

/* Функции создания элементов        */
/* --------------------------------- */

let lwElementsCounter = 0;

/**
 * Создает элемент, присваивает ему ID (если передан), добавляет классы и добавляет в переданный parent
 * @param nodeName {String}
 * @param ID {String|null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwCreateElement(nodeName, ID = null, classArray, parent) {
    if (!ID)
        ID = 'lwAutoID_' + lwElementsCounter + Math.floor(Math.random() * 999999999)


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

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwDiv(ID = null, classArray = [], parent = null) {
    return lwCreateElement('div', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwLabel(ID = null, classArray = [], parent = null) {
    return lwCreateElement('label', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwSmall(ID = null, classArray = [], parent = null) {
    return lwCreateElement('small', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwSpan(ID = null, classArray = [], parent = null) {
    return lwCreateElement('span', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwUl(ID = null, classArray = [], parent = null) {
    return lwCreateElement('ul', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwImg(ID = null, classArray = [], parent = null) {
    return lwCreateElement('img', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwLi(ID = null, classArray = [], parent = null) {
    return lwCreateElement('li', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwOl(ID = null, classArray = [], parent = null) {
    return lwCreateElement('ol', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwP(ID = null, classArray = [], parent = null) {
    return lwCreateElement('p', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwH1(ID = null, classArray = [], parent = null) {
    return lwCreateElement('h1', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwH2(ID = null, classArray = [], parent = null) {
    return lwCreateElement('h2', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwH3(ID = null, classArray = [], parent = null) {
    return lwCreateElement('h3', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwH4(ID = null, classArray = [], parent = null) {
    return lwCreateElement('h4', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwH5(ID = null, classArray = [], parent = null) {
    return lwCreateElement('h5', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwH6(ID = null, classArray = [], parent = null) {
    return lwCreateElement('h6', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwA(ID = null, classArray = [], parent = null) {
    return lwCreateElement('a', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwAddress(ID = null, classArray = [], parent = null) {
    return lwCreateElement('address', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwAbbr(ID = null, classArray = [], parent = null) {
    return lwCreateElement('abbr', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwB(ID = null, classArray = [], parent = null) {
    return lwCreateElement('B', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwBr(ID = null, classArray = [], parent = null) {
    return lwCreateElement('br', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwButton(ID = null, classArray = [], parent = null) {
    return lwCreateElement('button', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwDel(ID = null, classArray = [], parent = null) {
    return lwCreateElement('del', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwEm(ID = null, classArray = [], parent = null) {
    return lwCreateElement('em', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwI(ID = null, classArray = [], parent = null) {
    return lwCreateElement('i', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwInput(ID = null, classArray = [], parent = null) {
    return lwCreateElement('input', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwTextArea(ID = null, classArray = [], parent = null) {
    return lwCreateElement('textarea', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwTable(ID = null, classArray = [], parent = null) {
    return lwCreateElement('table', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwTBody(ID = null, classArray = [], parent = null) {
    return lwCreateElement('tbody', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwTHead(ID = null, classArray = [], parent = null) {
    return lwCreateElement('thead', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwTd(ID = null, classArray = [], parent = null) {
    return lwCreateElement('td', ID, classArray, parent)
}

/**
 *
 * @param ID {String|Null}
 * @param classArray {Array}
 * @param parent {String|HTMLElement}
 * @returns {HTMLElement}
 */
function lwTr(ID = null, classArray = [], parent = null) {
    return lwCreateElement('tr', ID, classArray, parent)
}

/* Дополнительные фичи               */
/* --------------------------------- */

/**
 * Скроллит к элементу. Принимает либо id либо эдемент
 * @param element {{HTMLElement}|String}
 * @param offset {Number}
 * @param behavior {String}
 */
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

/**
 * Подключает в head (или при его отсутствии в body) script
 * @param src {String}
 */
function lwIncludeJS(src) {
    const htmlSctring = `/n<script src="${src}"></script>`
    _lwIncludeProcessor(htmlSctring)
}

/**
 * Подключает в head (или при его отсутствии в body) link
 * @param src {String}
 */
function lwIncludeCSS(src) {
    const htmlSctring = `/n<link rel="stylesheet" href="${src}">`
    _lwIncludeProcessor(htmlSctring)
}

function _lwIncludeProcessor(html) {
    const header = document.getElementsByTagName('head')
    if (header.length > 0) {
        header[0].innerHTML += html
    } else {
        const body = document.getElementsByTagName('body')
        if (body.length > 0)
            body[0].innerHTML += html
        else
            console.error('head and body not found')
    }
}

/* Функции проверок типов            */
/* --------------------------------- */

/**
 * Проверяет на число
 * @param data {*}
 * @returns {boolean}
 */
function lwIsNum(data) {
    return typeof data === 'number'
}

/**
 * Проверяет на Строку
 * @param data {*}
 * @returns {boolean}
 */
function lwIsStr(data) {
    return typeof data === 'string'
}

/**
 * Проверяет на объект
 * @param data {*}
 * @returns {boolean}
 */
function lwIsObj(data) {
    return typeof data === 'object'
}

/**
 * Проверяет на функцию
 * @param data {*}
 * @returns {boolean}
 */
function lwIsFunc(data) {
    return typeof data === 'function'
}

/**
 * Проверяет на undefined
 * @param data {*}
 * @returns {boolean}
 */
function lwIsUnd(data) {
    return typeof data === 'undefined'
}