import {combineReducers} from 'redux'
import quizReducer from './quiz'

//ф-я объединяет все суще-е редьюсеры
export default combineReducers({
    quiz: quizReducer
})