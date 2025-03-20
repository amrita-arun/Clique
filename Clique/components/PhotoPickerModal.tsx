// components/PhotoPickerModal.tsx
import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

interface PhotoPickerModalProps {
  visible: boolean;
  onDone: (selectedImages: string[]) => void;
  onCancel: () => void;
}

const PhotoPickerModal: React.FC<PhotoPickerModalProps> = ({ visible, onDone, onCancel }) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access camera roll is required!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setSelectedImages(prev => {
        if (prev.length < 5) {
          return [...prev, result.assets[0].uri];
        } else {
          alert('You can only select up to 5 images.');
          return prev;
        }
      });
    }
  };

  const handleDone = () => {
    onDone(selectedImages);
    setSelectedImages([]);
  };

  const handleCancel = () => {
    onCancel();
    setSelectedImages([]);
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={handleCancel}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select up to 5 Photos</Text>
          <Button title="Pick an Image" onPress={pickImage} />
          <ScrollView horizontal style={styles.imagePreviewContainer}>
            {selectedImages.map((uri, index) => (
              <Image key={index} source={{ uri }} style={styles.previewImage} />
            ))}
          </ScrollView>
          <Button title="Done" onPress={handleDone} />
          <Button title="Cancel" onPress={handleCancel} color="red" />
        </View>
      </View>
    </Modal>
  );
};

export default PhotoPickerModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  imagePreviewContainer: {
    marginVertical: 10,
  },
  previewImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
});
