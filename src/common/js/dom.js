export function addClass(el, className) {
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = new.join(' ')
}

export function hasClass(el, className) {
    let reg = new regExp(('^|\\s') + className + '(\\s|$)')
    return reg.test(el.className)
}