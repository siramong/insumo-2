import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { COLORS } from '../constants/Colors';

interface RegisterFormProps {
  onSubmit: () => void;
  onSwitchToLogin: () => void;
}

export default function RegisterForm({ onSubmit, onSwitchToLogin }: RegisterFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="w-full px-6">
      <Text className="text-3xl font-bold mb-8 text-center" style={{ color: COLORS.text }}>
        Registro
      </Text>
      
      <TextInput
        className="w-full p-4 mb-4 rounded-lg"
        style={{ backgroundColor: COLORS.card, color: COLORS.text }}
        placeholder="Nombre"
        placeholderTextColor={COLORS.textSecondary}
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        className="w-full p-4 mb-4 rounded-lg"
        style={{ backgroundColor: COLORS.card, color: COLORS.text }}
        placeholder="Email"
        placeholderTextColor={COLORS.textSecondary}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        className="w-full p-4 mb-6 rounded-lg"
        style={{ backgroundColor: COLORS.card, color: COLORS.text }}
        placeholder="Contraseña"
        placeholderTextColor={COLORS.textSecondary}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity
        className="w-full p-4 rounded-full mb-4 active:opacity-80"
        style={{ backgroundColor: COLORS.primary }}
        onPress={onSubmit}
      >
        <Text className="text-center font-bold text-lg" style={{ color: COLORS.text }}>
          Registrarse
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity className="mt-4 active:opacity-70" onPress={onSwitchToLogin}>
        <Text className="text-center" style={{ color: COLORS.textSecondary }}>
          ¿Ya tienes cuenta? <Text style={{ color: COLORS.primary }}>Inicia sesión</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}