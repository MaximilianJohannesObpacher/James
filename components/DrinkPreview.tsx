import React from 'react';

import { View, Image, Text, TextProps } from 'react-native'
import { StyleSheet } from 'react-native';


export default function DrinkPreview(props) {
    return (
      <View style={styles.container}>
        <View>
          <Image 
            style={styles.previewImage}
            source={props.imageReference} 
          />
          <Text style={styles.drinkName}>{props.name}</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  drinkName: {
    textAlign: 'center',
    paddingTop: '3%',
  },
  container: {
    padding: '2%',
  },
  previewImage: {
    marginTop: 20,
    width: 240,
    height: 240,
  }
});