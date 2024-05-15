const Render = (element, content, concatenate) => {
    if (concatenate == true) {
        document.querySelector(element).innerHTML += content
    } else {
        document.querySelector(element).innerHTML = content
    }
}

export {Render}