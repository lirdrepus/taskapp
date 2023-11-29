import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function Contact({navigation}) {


  return (
    <View style={styles.container}>
      <Text>Contact Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')} >
         <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = require('../Styles');
