import { useRouter, type RelativePathString } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { Button, Card } from 'react-native-paper';

export default function HomeScreen() {
  const router = useRouter();

  const features = [
    {
      icon: '🍎',
      title: 'Personalized Meal Plans',
      description: 'Tailored nutrition guides',
    },
    {
      icon: '🏋️',
      title: 'Custom Workouts',
      description: 'Exercise routines',
    },
    {
      icon: '📝',
      title: 'Habit Challenges',
      description: 'Build healthy habits',
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor your journey',
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
      <View className="items-center justify-center bg-slate-50 p-6 pt-12">
        <View className="flex-row items-center bg-blue-100 px-3 py-2 rounded-full mb-4">
          <Text className="text-blue-500 text-sm font-medium">
            Your Ultimate Fitness Companion
          </Text>
        </View>

        <Text className="text-3xl font-extrabold text-slate-800 mb-2 text-center">
          <Text className="text-blue-600">Cloudy Unicorn</Text>
          {'\n'}
          AI-Powered Fitness & Nutrition
        </Text>
        <Text className="text-xl font-semibold text-slate-500 mb-4 text-center">
          Achieve Your Health Goals
        </Text>

        <Text className="text-base text-slate-500 mb-8 text-center px-6">
          Your all-in-one platform for personalized meal plans, custom workouts,
          and progress tracking.
        </Text>

        <View className="flex-row gap-3 mb-8">
          <Button
            mode="elevated"
            onPress={() => router.push('/(auth)/signup' as RelativePathString)}
          >
            Get Started
          </Button>

          <Button
            mode="contained"
            onPress={() => router.push('/(auth)/login' as RelativePathString)}
          >
            Sign In
          </Button>
        </View>
      </View>

      {/* Features Section */}
      <View className="p-6">
        <Text className="text-2xl font-bold text-center mb-6 text-slate-800">
          Everything You Need
        </Text>

        <View className="flex-row flex-wrap gap-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="w-[48%] bg-slate-50 p-4 rounded-xl border border-slate-200"
              mode="elevated"
            >
              <Card.Content>
                <Text className="text-2xl mb-3">{feature.icon}</Text>
                <Text className="font-semibold text-slate-800 mb-1">
                  {feature.title}
                </Text>
                <Text className="text-sm text-slate-500">
                  {feature.description}
                </Text>
              </Card.Content>
            </Card>
          ))}
        </View>
      </View>

      {/* CTA Section */}
      <Card className="p-6 pb-12 bg-slate-50 mt-4 items-center" mode="elevated">
        <Card.Content>
          <View className="flex-row items-center gap-2 mb-4">
            <Text className="text-blue-500 text-sm font-medium">
              Trusted by 10,000+ Users
            </Text>
          </View>

          <Text className="text-2xl font-bold text-center mb-2 text-slate-800">
            Ready to Transform Your Life?
          </Text>
          <Text className="text-base text-slate-500 mb-6 text-center px-6">
            Join thousands achieving their fitness goals.
          </Text>

          <Button
            mode="contained"
            maxFontSizeMultiplier={2}
            onPress={() => router.push('/(auth)/signup' as RelativePathString)}
          >
            Start Free Assessment
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
