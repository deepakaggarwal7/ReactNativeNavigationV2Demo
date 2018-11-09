import {ADD_PLACE,DELETE_PLACE} from '../actions/actionTypes'


const initialState = {
    places:[{key:'1',placeName:'Delhi'},{key:'2',placeName:'Mumbai'}]
}

const reducer = (prevState = initialState, action) =>{
    switch(action.type){
        case ADD_PLACE:{
            return {
                ...prevState,
                places: prevState.places.concat({key:Math.random(), placeName:action.placeName})
            }
        }
        case DELETE_PLACE:{
            return {
                ...prevState,
                places: prevState.places.filter(place => {
                    return (
                        place.key == action.placeKey
                    )
                })
            }
        }
        default:
        return prevState;
    }
}

export default reducer;