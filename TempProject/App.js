import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import validCreditCard from 'credit-card-validator-sev'; 

const App = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(null);

  const validateCard = () => {
    setIsValid(validCreditCard(cardNumber));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kredi Kartı Numarası Validasyonu</Text>
      <TextInput
        style={styles.input}
        value={cardNumber}
        onChangeText={setCardNumber}
        placeholder="Kredi Kartı Numarasını Girin"
        keyboardType="numeric"
      />
      <Button title="Doğrulama" onPress={validateCard} />
      {isValid !== null && (
        <Text style={styles.result}>
          {isValid ? 'Geçerli' : 'Geçersiz'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 16,
  },
  result: {
    fontSize: 18,
    marginTop: 16,
    color: isValid ? 'green' : 'red',
  },
});

export default App;