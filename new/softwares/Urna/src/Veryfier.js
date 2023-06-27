const Veryfier = (className, stage) => {
    let numberArea = document.querySelector(className),
        status = undefined,
        candidate = undefined;

    if(numberArea.innerHTML.length >= stage.numberLength ) {
        status = 'nullVote'
        candidate = stage.candidates[0]
        stage.candidates.forEach(singleCandidate => {
            if(numberArea.innerHTML == singleCandidate.number ){
                status = true
                candidate = singleCandidate
            } 
        });
        return {status, candidate}
    } else return {status}
}
export {Veryfier}