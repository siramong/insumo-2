import "@/global.css"

import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { COLORS } from '../constants/Colors';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function LoginRegister() {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(true);

  const handleSubmit = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: COLORS.background }}>
      <View className="flex-1 justify-center items-center">
        <FontAwesome6 className="text-6xl mb-8" name="music" size={30} color={COLORS.accent} />
        
        {showLogin ? (
          <LoginForm
            onSubmit={handleSubmit}
            onSwitchToRegister={() => setShowLogin(false)}
          />
        ) : (
          <RegisterForm
            onSubmit={handleSubmit}
            onSwitchToLogin={() => setShowLogin(true)}
          />
        )}
      </View>
    </SafeAreaView>
  );
}