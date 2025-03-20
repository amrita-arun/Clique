
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import PhotoPickerModal from './../../components/PhotoPickerModal'

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pickedPhotos, setPickedPhotos] = useState<string[]>([]);

  const handleModalDone = (images: string[]) => {
    setPickedPhotos(images);
    setModalVisible(false);
    // Further processing, e.g., uploading the images
    console.log('Selected images:', images);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>Home Screen</Text>*/}
      <Button title="Open Photo Picker" onPress={() => setModalVisible(true)} />
      
      <PhotoPickerModal 
        visible={modalVisible} 
        onDone={handleModalDone} 
        onCancel={handleModalCancel} 
      />

      {/* Displaying the picked images */}
      {pickedPhotos.length > 0 && (
        <ScrollView contentContainerStyle={styles.imageContainer}>
          {pickedPhotos.map((uri, index) => (
            <Image 
              key={index} 
              source={{ uri }} 
              style={styles.image} 
              resizeMode="cover"
            />
          ))}
        </ScrollView>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
});
