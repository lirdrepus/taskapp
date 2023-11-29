import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function Settings({navigation}) {


  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact')} >
         <Text style={styles.buttonText}>Go to Contact Page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = require('../Styles');
