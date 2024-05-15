import {Render} from './Render.js'
import { Texts } from './Texts.js'

const RenderCandidate = (candidate) => {
    Texts.setContent(candidate)
    Render(".screen", Texts.content)
}

export {RenderCandidate, Render}

