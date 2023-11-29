
import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 8,
  },
  navigatorHeading: {
     headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
  },
    title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: "center"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  contactItem: {
    marginBottom: 10,
  },
  deleteButton: {
     width: 60,
     height: 22,
     borderRadius: 5,
     borderWidth: 2,
     borderColor: "#000",
     backgroundColor: "red"
  },
  editButton: {
     width: 60,
     height: 22,
     borderRadius: 5,
     borderWidth: 2,
     borderColor: "#000",
     backgroundColor: "green"
  },
  deleteText: {
     textAlign: "center"
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskItem: {
    marginTop: 30,
  },
  description: {
    fontSize: 16,
  },
  containerWithImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  }, 
  roi: {
    flex: 1,
    width: screenWidth, 
    resizeMode: 'contain',
  },
  gelos: { 
    flex: 1,
    width: screenWidth, 
    resizeMode: 'cover',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});