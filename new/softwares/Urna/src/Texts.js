const Texts = {
    null:``,
    content: ``,
    voteContent: ``,
    whiteOrNullContent:``,
    resultsContent:``,
    votationFinished:`
       <h2>Fim da votação</h2>
    `,
    endStageContent: `
        <h2>FIM DA VOTAÇÃO</h2>
        <p>Prossiga para a contagem dos votos ou inicie uma nova votação</p>
    `,
    buttons: `
        <input type="button" value="Branco" id="white-btn" class="white-btn control-btn">
        <input type="button" value="Corrige" id="erase-btn" class="erase-btn control-btn">
        <input type="button" value="Confirma" id="confirm-btn" class="confirm-btn control-btn">
        <input type="button" value="Novo Eleitor" id='voteAgainBtn' class="white-btn control-btn hidden">
        <input type="button" value="Finalizar Votação" id='writeVotesBtn' class="confirm-btn control-btn hidden">
        <input type="button" value="Ver resultados" id='seeResults' class="white-btn control-btn hidden">
        <input type="button" value="Nova votação" id='newVotationBtn' class="confirm-btn control-btn hidden">
    `,
    votes:{
        stateRepresentative:"",
        congressman:"",
        senator:"",
        governor:"",
        president:""
    },
    allCandidatesContent:{
        stateRepresentative:"",
        congressman:"",
        senator:"",
        governor:"",
        president:""
    },
    setContent: content => {
        Texts.content =`
            <h2 class='votation-title'>${content.post}</h2>
            <div class='row'>
                <div class='col c50'>
                    <img src='${content.photoUrl}' alt='Foto do candidato' class='candidate_photo'  />
                    <h2>${content.name}</h2>
                </div>
                <div class='col c50 candidate_info'>
                    <p><span>Partido:</span> ${content.party}</p>
                    <p><span>Número:</span> ${content.number}</p>
                </div>
            </div>
            <br>
      `
    },
    setVoteContent: content => {
        Texts.voteContent =`
            <p>Votação para: </p>
            <h2>${content.post}</h2>
            <p>Números Digitados: </p>
            <span class='digited-number'></span>
        `   
    },
    setWhiteOrNullContent: content => {
        Texts.whiteOrNullContent = `
            <div class='whiteOrNullVoteArea'>
                <div>
                    <p>Votação para: </p>
                    <h2>${content.post}</h2>
                </div>
                <div>
                    <p>Voto escolhido:</p>
                    <span class='digited-number'><b>${content.name}</b></span>
                </div>
            </div>
        `
    },
    setStateRepresentativeContent: (content, isContent) => {
        content = content.stateRepresentative 
        if(isContent){
            content.forEach(candidate => {
                if(candidate.type != "nullVote" && candidate.type != "whiteVote") {
                    Texts.allCandidatesContent.stateRepresentative += 
                        `<div class='candidate-complete-info'>
                            <img src='${candidate.photoUrl}' alt='Imagem do candidato'>
                            <div class='candidate-info'>
                                <small>Nome:</small>
                                <span>${candidate.name}</span>
                                <small>Partido:</small>
                                <span>${candidate.party}</span>
                                <small>Número:</small>
                                <span>${candidate.number}</span>
                            </div>
                        </div>`
                }
            });   
        } else{
            content.forEach(candidate => {
                Texts.votes.stateRepresentative += candidate
            });     
        }   

    },
    setCongressman: (content, isContent) => {
        content = content.congressman 
        if(isContent){
            content.forEach(candidate => {
                if(candidate.type != "nullVote" && candidate.type != "whiteVote") {
                    Texts.allCandidatesContent.congressman += 
                    `<div class='candidate-complete-info'>
                    <img src='${candidate.photoUrl}' alt='Imagem do candidato'>
                    <div class='candidate-info'>
                        <small>Nome:</small>
                        <span>${candidate.name}</span>
                        <small>Partido:</small>
                        <span>${candidate.party}</span>
                        <small>Número:</small>
                        <span>${candidate.number}</span>
                    </div>
                </div>`
                }
            });   
        } else{
            content.forEach(candidate => {
                Texts.votes.congressman += candidate
            });     
        }   
    },
    setSenator: (content, isContent) => {
        content = content.senator 
        if(isContent){
            content.forEach(candidate => {
                if(candidate.type != "nullVote" && candidate.type != "whiteVote") {
                    Texts.allCandidatesContent.senator += 
                    `<div class='candidate-complete-info'>
                        <img src='${candidate.photoUrl}' alt='Imagem do candidato'>
                        <div class='candidate-info'>
                            <small>Nome:</small>
                            <span>${candidate.name}</span>
                            <small>Partido:</small>
                            <span>${candidate.party}</span>
                            <small>Número:</small>
                            <span>${candidate.number}</span>
                        </div>
                    </div>`
                }
            });   
        } else{
            content.forEach(candidate => {
                Texts.votes.senator += candidate
            });     
        }       
    },
    setGovernor: (content, isContent) => {
        content = content.governor 
        if(isContent){
            content.forEach(candidate => {
                if(candidate.type != "nullVote" && candidate.type != "whiteVote") {
                    Texts.allCandidatesContent.governor += 
                    `<div class='candidate-complete-info'>
                        <img src='${candidate.photoUrl}' alt='Imagem do candidato'>
                        <div class='candidate-info'>
                            <small>Nome:</small>
                            <span>${candidate.name}</span>
                            <small>Partido:</small>
                            <span>${candidate.party}</span>
                            <small>Número:</small>
                            <span>${candidate.number}</span>
                        </div>
                    </div>`
                }
            });   
        } else{
            content.forEach(candidate => {
                Texts.votes.governor += candidate
            });     
        }      
    },
    setPresident: (content, isContent) => {
        content = content.president 
        if(isContent){
            content.forEach(candidate => {
                if(candidate.type != "nullVote" && candidate.type != "whiteVote") {
                    Texts.allCandidatesContent.president += 
                    `<div class='candidate-complete-info'>
                        <img src='${candidate.photoUrl}' alt='Imagem do candidato'>
                        <div class='candidate-info'>
                            <small>Nome:</small>
                            <span>${candidate.name}</span>
                            <small>Partido:</small>
                            <span>${candidate.party}</span>
                            <small>Número:</small>
                            <span>${candidate.number}</span>
                        </div>
                    </div>`
                }
            });   
        } else{
            content.forEach(candidate => {
                Texts.votes.president += candidate
            });     
        }
    },
    setResultsContent: content => {
        Texts.votes = {
            stateRepresentative: "",
            congressman:"",
            senator:"",
            governor:"",
            president:""
        }
        Texts.setStateRepresentativeContent(content)
        Texts.setCongressman(content)
        Texts.setSenator(content)
        Texts.setGovernor(content)
        Texts.setPresident(content)
        Texts.resultsContent = `
        <div class='row'>
            <div class='col c50'>
                <small>Votação para:</small>
                <h2>Deputado Federal</h2>
                ${Texts.votes.stateRepresentative}
            </div>
            <div class='col c50'>
                <small>Votação para:</small>
                <h2>Deputado Estadual</h2>
                ${Texts.votes.congressman}
            </div>
        </div>
        <div class='row'>
            <div class='col c50'>
                <small>Votação para:</small>
                <h2>Senador</h2>
                ${Texts.votes.senator}
            </div>
            <div class='col c50'>
                <small>Votação para:</small>
                <h2>Governador</h2>
                ${Texts.votes.governor}
            </div>
        </div>
        <div class='row'>
            <div class='col c100'>
                <small>Votação para:</small>
                <h2>Presidente</h2>
                ${Texts.votes.president}
            </div>
        </div>
        `
    },
    setAllCandidatesContent: content => {
        Texts.allCandidatesContent= {
            stateRepresentative: "",
            congressman:"",
            senator:"",
            governor:"",
            president:""
        }
        Texts.setStateRepresentativeContent(content, true)
        Texts.setCongressman(content, true)
        Texts.setSenator(content, true)
        Texts.setGovernor(content, true)
        Texts.setPresident(content, true)
        Texts.allCandidatesContent = `
        <div class='row allCandidates'>
            <div class='col c100'>
                <small>Candidatos para:</small>
                <h2>Deputado Federal</h2>
                <div class='row'>
                    ${Texts.allCandidatesContent.stateRepresentative}
                </div>
            </div>
        </div>
        <div class='row allCandidates'>
            <div class='col c100'>
                <small>Candidatos para:</small>
                <h2>Deputado Estadual</h2>
                <div class='row'>
                    ${Texts.allCandidatesContent.congressman}
                
                </div>
            </div>
        </div>
        <div class='row allCandidates'>
            <div class='col c100'>
                <small>Candidatos para:</small>
                <h2>Senador</h2>
                <div class='row'>
                    ${Texts.allCandidatesContent.senator}
                </div>
            </div>
        </div>
        <div class='row allCandidates'>
            <div class='col c100'>
                <small>Candidatos para:</small>
                <h2>Governador</h2>
                <div class='row'>
                    ${Texts.allCandidatesContent.governor}
                </div>
            </div>
        </div>
        <div class='row allCandidates'>
            <div class='col c100'>
                <small>Candidatos para:</small>
                <h2>Presidente</h2>
                <div class='row'>
                    ${Texts.allCandidatesContent.president}
                </div>
            </div>
        </div>
        `
    }
}

export {Texts}