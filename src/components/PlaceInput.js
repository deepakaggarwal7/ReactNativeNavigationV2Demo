import React,{Component} from 'react'
import {View, TextInput, Button} from 'react-native'

export default class PlaceInput extends Component{
    state = {
        placeName:''
    }

    placeChangedHandler = (placeText) =>{
        this.setState({
            placeName: placeText
        })
    }

    placeSubmitHandler = ()=>{
        this.props.onPlaceAdded(this.state.placeName)
    }

    render(){
        return(
            <View>
                <TextInput placeholder="enter place" onChangeText={this.placeChangedHandler}></TextInput>
                <Button title="Add" onPress={this.placeSubmitHandler}></Button>
            </View>

        )
    }
};
