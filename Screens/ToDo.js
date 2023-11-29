import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import alert from '../alert';

export default function TaskManager() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  const [tasks, setTasks] = useState([]);
  const [isAddTaskContainerVisible, setAddTaskContainerVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Load tasks from AsyncStorage when the component mounts
    loadTasks();
  }, []);

  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks !== null) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const handleAddTask = () => {
    if (id.trim() !== '' && name.trim() !== '') {
      const editedTask = {
        id,
        name,
        phone,
        department,
        street,
        city,
        state,
        zipCode,
        country,
      };

      if (editIndex !== null) {
        // Update the existing task if in edit mode
        let updatedTasks = tasks.concat();
        updatedTasks[editIndex] = editedTask;
        setTasks(updatedTasks);
        setEditIndex(null); // Exit edit mode
      } else {
        // Add a new task if not in edit mode
        const newTasks = tasks.concat(editedTask);
        setTasks(newTasks);
      }

      saveTasks(tasks);
      // Reset input fields
      setId('');
      setName('');
      setPhone('');
      setDepartment('');
      setStreet('');
      setCity('');
      setState('');
      setZipCode('');
      setCountry('');
      setAddTaskContainerVisible(false); // Hide the container after adding/editing a task
    }
  };

  const deleteTask = (index) => {
    return alert(
      'Are you sure?',
      'Are you sure you want to remove this task?',
      [
        // The "No" button
        {
          text: 'No',
        },
        // The "Yes" button
        {
          text: 'Yes',
          onPress: () => {
            let taskList = tasks.concat();
            taskList.splice(index, 1);
            setTasks(taskList);
            setEditIndex(null); // Exit edit mode if deleting the task being edited
          },
        },
      ]
    );
  };

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setId(taskToEdit.id);
    setName(taskToEdit.name);
    setPhone(taskToEdit.phone);
    setDepartment(taskToEdit.department);
    setStreet(taskToEdit.street);
    setCity(taskToEdit.city);
    setState(taskToEdit.state);
    setZipCode(taskToEdit.zipCode);
    setCountry(taskToEdit.country);
    setEditIndex(index);
    setAddTaskContainerVisible(true); // Show the container in edit mode
  };

  const toggleAddTaskContainer = () => {
    setAddTaskContainerVisible(!isAddTaskContainerVisible);
    setEditIndex(null); // Exit edit mode when hiding the container
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Staff Details</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text style={styles.name}>{`ID: ${item.id}\nName: ${item.name}`}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => editTask(index)}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteTask(index)}>
                <Text style={styles.buttonText}>Del</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {isAddTaskContainerVisible && (
        <View style={styles.overlayContainer}>
          <View style={styles.addTaskContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter an ID"
              value={id}
              onChangeText={(text) => setId(text)}
              editable={!editIndex} // Disable editing ID in edit mode
            />
            <TextInput
              style={styles.input}
              placeholder="Enter a Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter a Phone Number"
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter a Department"
              value={department}
              onChangeText={(text) => setDepartment(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Street Number and Street"
              value={street}
              onChangeText={(text) => setStreet(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter a City"
              value={city}
              onChangeText={(text) => setCity(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter a State"
              value={state}
              onChangeText={(text) => setState(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter a Zip Code"
              value={zipCode}
              onChangeText={(text) => setZipCode(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter a Country"
              value={country}
              onChangeText={(text) => setCountry(text)}
            />
            <Button title={editIndex !== null ? 'Save Changes' : 'Add Task'} onPress={handleAddTask} />
          </View>
        </View>
      )}
      <Button title={'Input <=> Contacts'} onPress={toggleAddTaskContainer} />
    </View>
  );
}

const styles = require('../Styles');
