import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://www.ke.com.pk' }} style={styles.webview} />
      <Button
        title="Show Location"
        onPress={() => navigation.navigate('Location')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default HomeScreen;
