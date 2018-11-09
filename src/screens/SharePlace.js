import React from 'react'
import {View,Text, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import PlaceInput from '../components/PlaceInput'
import {addPlace} from '../../store/actions'



class SharePlace extends React.Component{
    placeAddedHandler = (placeName)=>{
        this.props.placeAdded(placeName);
    }

    render()
    {
        return(
           <View>
            <PlaceInput onPlaceAdded={this.placeAddedHandler}></PlaceInput>
        </View> 
        )
    }
    
}

//export default screen1;


const mapDispatchToProps = dispatch =>{
    return{
    placeAdded: placeName => dispatch(addPlace(placeName))
}
}

export default connect(null, mapDispatchToProps)(SharePlace);