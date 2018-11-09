import React,{Component} from 'react'
import {connect} from 'react-redux'
import {View} from 'react-native'
import PlaceList from '../components/PlaceList'


class FindPlace extends Component{
    render(){
        return(
            <View>
                <PlaceList places={this.props.places}></PlaceList>
            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
    places: state.places.places
}
}

export default connect(mapStateToProps)(FindPlace);