import React from 'react';

import { View, Image, Text, TouchableHighlight } from 'react-native'
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';




export default function DrinkPreview(props) {
    const Stack = createStackNavigator();
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => navigation.navigate('DrinkDetail')}>
          <View>
          <Image 
            style={styles.previewImage}
            source={props.imageReference}
          />
          <Text style={styles.drinkName}>{props.name}</Text>
          </View>
        </TouchableHighlight>
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
    marginTop: 25,
    width: 240,
    height: 240,
  }
});