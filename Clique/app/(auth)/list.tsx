import { View, StyleSheet, TouchableOpacity, ScrollView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import ImageItem from '@/components/ImageItem'
import * as ImagePicker from 'expo-image-picker'
import { useAuth } from '../../provider/AuthProvider'
import * as FileSystem from 'expo-file-system'
//import { decode } from 'base64-arraybuffer'
import { supabase } from '../../utils/supabase'
import { FileObject } from '@supabase/storage-js'

const list = () => {
  const { user } = useAuth()
  const [files, setFiles] = useState<FileObject[]>([])

  useEffect(() => {
    if (!user) return

    // Load user images
    loadImages()
  }, [user])

  const loadImages = async () => {
    const { data } = await supabase.storage.from('files').list(user!.id)
    if (data) {
      setFiles(data)
    }
  }

  const onSelectImage = async () => {
    // TODO
  }

  const onRemoveImage = async (item: FileObject, listIndex: number) => {
    supabase.storage.from('files').remove([`${user!.id}/${item.name}`])
    const newFiles = [...files]
    newFiles.splice(listIndex, 1)
    setFiles(newFiles)
  }
  

  return (
    <View style={styles.container}>
      <ScrollView>
        {files.map((item, index) => (
          <ImageItem
            key={item.id}
            item={item}
            userId={user!.id}
            onRemoveImage={() => onRemoveImage(item, index)}
          />
        ))}
      </ScrollView>
  
      {/* FAB to add images */}
      <TouchableOpacity onPress={onSelectImage} style={styles.fab}>
        <Ionicons name="camera-outline" size={30} color={'#fff'} />
      </TouchableOpacity>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#151515',
  },
  fab: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 40,
    right: 30,
    height: 70,
    backgroundColor: '#2b825b',
    borderRadius: 100,
  },
})

export default list
