import { useIsFocused } from "@react-navigation/native";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { useRef, useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CameraAndPicker() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  // 1. Create a ref for the CameraView
  const cameraRef = useRef<CameraView>(null);

  const isFocused = useIsFocused();

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  // 2. Function to take the photo
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPickedImage(photo?.uri || null);
    }
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access media library is required.",
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {isFocused && (
        <CameraView
          ref={cameraRef} // 3. Attach the ref
          style={styles.camera}
          facing={facing}
        />
      )}

      {/* --- UI Overlays --- */}

      {/* Flip Camera: Upper Left */}
      <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
        <Text style={styles.text}>Flip</Text>
      </TouchableOpacity>

      {/* Snap Photo: Center Bottom */}
      <View style={styles.snapButtonContainer}>
        <TouchableOpacity style={styles.snapButton} onPress={takePicture}>
          <View style={styles.snapButtonInner} />
        </TouchableOpacity>
      </View>

      {/* Choose Photos: Lower Left */}
      <TouchableOpacity style={styles.galleryButton} onPress={pickImage}>
        <Text style={styles.text}>Choose Photo</Text>
      </TouchableOpacity>

      {/* Preview */}
      {pickedImage && (
        <Image source={{ uri: pickedImage }} style={styles.previewImage} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  message: { textAlign: "center", paddingBottom: 10 },
  camera: { flex: 1 },

  // Positioned Upper Left
  flipButton: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 8,
  },

  // Positioned Lower Left
  galleryButton: {
    position: "absolute",
    bottom: 50,
    left: 20,
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 8,
  },

  // Container to help center the snap button
  snapButtonContainer: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  // Circle Snap Button
  snapButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  snapButtonInner: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "white",
  },

  text: { fontSize: 16, fontWeight: "bold", color: "white" },

  previewImage: {
    position: "absolute",
    top: 50,
    right: 20,
    width: 80,
    height: 120,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
  },
});
