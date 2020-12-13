import React from 'react';

import { View, Image, Text } from 'react-native'
import { StyleSheet } from 'react-native';



export default function DrinkPreview(props) {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.previewImage}
          source={require('../img/whiskey_sour.jpg')} 
        />
        <Text style={styles.drinkName}>{props.name}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  drinkName: {
    textAlign: 'center',
    paddingTop: 20,
  },
  container: {
    padding: '2%',
  },
  previewImage: {
    width: 200,
    height: 200,
  }
});