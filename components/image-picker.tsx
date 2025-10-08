import * as IP from 'expo-image-picker';
import { Image, Pressable, StyleSheet, View } from "react-native";

export type ProfilePictureProps = {
    img?: string;
    onSelect: (imageUri: string) => void;
}
export default function ImagePicker({ img, onSelect, ...rest }: ProfilePictureProps) {

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await IP.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            onSelect(result.assets[0].uri);
        }
    }

    return (
        <View style={styles.container}>
            {img && (
                <Pressable onPress={pickImage}>
                    <Image
                        source={{ uri: img }}
                        style={styles.roundImage}
                    />
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    roundImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 16,
        borderWidth: 2,
        borderColor: "#841584",
        backgroundColor: "#333",
    },
});