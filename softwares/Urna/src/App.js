import {Stages} from './Stages.js'
import {Candidates} from './Candidates.js'
import { Veryfier } from './Veryfier.js'
import {Texts} from './Texts.js'
import {RenderCandidate, Render} from './RenderCandidate.js'
import {Errors} from './Errors.js'
import {VotesCount} from './VotesCount.js'
import {HideAndShowElements} from './HideAndShowElements.js'

const c = m => console.log(m)
const d = a => document.querySelector(a)

const setValue = btn => {
    Render('.digited-number', btn.value, true)
}
let selected = undefined,
    buttons = document.querySelectorAll('.number-btn')

const App = {
    start: (i) => {
        Texts.setVoteContent(Stages.data[i])
        Render(".screen", Texts.voteContent)
        Render('.controls', Texts.buttons)
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                Render('.error-area', '<br>')
                if(Stages.presentStep == 'selecting'){
                    setValue(btn)
                    selected = Veryfier('.digited-number', Stages.data[i])
                    if(selected.status) {
                        if(selected.status == 'nullVote'){
                            Texts.setWhiteOrNullContent({name:"Nulo", post:Stages.data[i].post})
                            Render('.screen', Texts.whiteOrNullContent)
                            Stages.presentStep = 'selected'
                        } else {
                            RenderCandidate(selected.candidate)
                            Stages.presentStep = 'selected'
                        }
                    }
                } else if(Stages.presentStep == 'selected'){
                    Render('.error-area', Errors.clickOnSelectedStage)
                } else if(Stages.presentStep == 'endVotation'){
                    Render('.error-area', Errors.endVotationStage)
                }
            })
        })
        let whiteBtn = d('#white-btn'),
            eraseBtn = d('#erase-btn'),
            confirmBtn = d('#confirm-btn'),
            voteAgainBtn = d('#voteAgainBtn'),
            writeVotesBtn =  d('#writeVotesBtn'),
            newVotationBtn = d('#newVotationBtn'),
            seeResultsBtn = d('#seeResults'),
            popUpBk = d('#popUpBackground'),
            popUp = d('#popUp'),
            closePopUpBtn = d('#closePopUpBtn'),
            seeCandidatesBtn = d('#seeCandidatesBtn');

        whiteBtn.addEventListener('click', () => {
            if(Stages.presentStep == 'selected'){
                Render('.error-area', Errors.clickOnSelectedStage)
            } else {
                Render('.error-area', '<br>')
                selected = {status:'whiteVote', candidate:Stages.data[i].candidates[1]}
                Texts.setWhiteOrNullContent({name:selected.candidate.name, post:Stages.data[i].post})
                Render('.screen', Texts.whiteOrNullContent)
                Stages.presentStep = 'selected'
            }
        })
        eraseBtn.addEventListener('click', () => {
            Render('.error-area', '<br>')
            Texts.setVoteContent(Stages.data[i])
            Render(".screen", Texts.voteContent)
            Stages.presentStep = 'selecting'
        })
        confirmBtn.addEventListener('click', () => {
            if((i) >= ( Stages.data.length - 1)) { 
                VotesCount.sumVote(selected, Stages[i] )
                Stages.presentStep = 'endVotation'
                HideAndShowElements([whiteBtn, eraseBtn, confirmBtn, voteAgainBtn, writeVotesBtn])
                Render(".screen", Texts.endStageContent)
            }
            else if(Stages.presentStep == "selected"){
                VotesCount.sumVote(selected, Stages[i] )
                i++
                Render('.error-area', '<br>')
                Texts.setVoteContent(Stages.data[i])
                Render(".screen", Texts.voteContent)
                Stages.presentStep = 'selecting'
            } else if (Stages.presentStep == "selecting") {
                Render('.error-area', Errors.beforeChoseCandidate)
            }
        })
        voteAgainBtn.addEventListener('click', () => {
            i = 0
            App.restart(i)
            HideAndShowElements([whiteBtn, eraseBtn, confirmBtn, voteAgainBtn, writeVotesBtn])

        })
        writeVotesBtn.addEventListener('click', () => {
            Render('.screen', Texts.votationFinished)
            HideAndShowElements([popUpBk, writeVotesBtn, voteAgainBtn, newVotationBtn, seeResultsBtn])
            Texts.setResultsContent(VotesCount.calculateResults(Candidates))
            Render('#votationContent', Texts.resultsContent)
            Stages.presentStep = 'finished'
        })
        newVotationBtn.addEventListener('click', () => {
            i = 0
            Texts.setVoteContent(Stages.data[i])
            Stages.presentStep = "selecting"
            VotesCount.resetVotes(Candidates)
            Render(".screen", Texts.voteContent)
            HideAndShowElements([whiteBtn, eraseBtn, confirmBtn, newVotationBtn, seeResultsBtn])
        })
        seeResultsBtn.addEventListener('click', () => {
            Render('#votationContent', Texts.resultsContent)   
            HideAndShowElements([popUpBk])

        })
        closePopUpBtn.addEventListener('click', () => {
            HideAndShowElements([popUpBk])

        })
        seeCandidatesBtn.addEventListener('click', () => {
            Texts.setAllCandidatesContent(Candidates)
            HideAndShowElements([popUpBk])
            Render('#votationContent', Texts.allCandidatesContent)
        })
    },
    restart: (i) => {
        Texts.setVoteContent(Stages.data[i])
        Render(".screen", Texts.voteContent)
        Stages.presentStep = 'selecting'
    }
}

export {App}