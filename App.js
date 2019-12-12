import React, { useState } from 'react';

import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={{ padding: 40 }} >
      <View>
        <TextInput placeholder="Course Goal" style={{ borderColor: 'black', borderWidth: 1 }} />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}


