import React from 'react'
import {View, FlatList, Text} from 'react-native'

const PlaceList = (props) =>(
    <View>
        <Text>{props.places[0].placeName}</Text>
        <Text>{props.places[1].key}</Text>
        <FlatList
      data={props.places}
      renderItem={(info) => (
        <Text>{info.item.placeName}</Text>
      )}
    />
    </View>

    

)

export default PlaceList;