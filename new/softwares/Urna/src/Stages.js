import { Candidates } from "./Candidates.js"
const Stages = {
    data:[
        {post: "Deputado Federal", numberLength: 4, candidates:Candidates.stateRepresentative, winner:undefined},
        {post: "Deputado Estadual", numberLength: 5, candidates:Candidates.congressman, winner:undefined},
        {post: "Senador", numberLength:3, candidates:Candidates.senator, winner:undefined},
        {post: "Governador", numberLength:2, candidates:Candidates.governor, winner:undefined},
        {post: "Presidente", numberLength:2, candidates:Candidates.president, winner:undefined}, 
    ],
    presentState: 0,
    presentStep:"selecting"
}

export {Stages}