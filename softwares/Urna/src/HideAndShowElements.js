const HideAndShowElements = (elements) => {
    elements.forEach(element => {
        let classExists = element.classList.value.indexOf('hidden')
        if(classExists == -1) {
            element.classList.add('hidden')
        } else if(classExists >= 0) {
            element.classList.remove('hidden')
        }
    })

}

export {HideAndShowElements} 