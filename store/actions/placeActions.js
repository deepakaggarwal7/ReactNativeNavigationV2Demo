import {ADD_PLACE,DELETE_PLACE} from './actionTypes'

export const addPlace = (name) => {
    return{
        type:ADD_PLACE,
        placeName:name
    }
}


export const deletePlace = (placeKey) =>{
    return{
        type:DELETE_PLACE,
        placeKey: placeKey
    }
}