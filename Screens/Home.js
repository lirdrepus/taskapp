import React from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerWithImage}>
        <Image source={require('../assets/ROI.png')} style={styles.roi} />
      </View>

      <View style={styles.containerWithImage}>
        <Image source={require('../assets/Gelos.png')} style={styles.gelos} />
      </View>

      <Text style={styles.deleteText}>Red Opal Innovations{"\n"}
Staff Contact Information{"\n"}
Management System</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ToDo')}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = require('../Styles');
