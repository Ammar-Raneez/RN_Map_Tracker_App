import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { setNavigator } from './src/navigationRef';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const InnerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='TrackList'
        component={TrackListScreen}
        options={{
          headerTitle: 'Tracks',
          title: 'Tracks',
        }}
      />
      <Stack.Screen
        name='TrackDetail'
        component={TrackDetailScreen}
        options={{
          headerTitle: 'Track Detail',
          title: 'Track Detail',
        }}
      />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let icon;
          if (route.name === 'Account') {
            icon = <FontAwesome name="gear" size={20} />;
          } else if (route.name === 'TrackCreate') {
            icon = <FontAwesome name="plus" size={20} />;
          } else if (route.name === 'InnerStack') {
            icon = <FontAwesome name="th-list" size={20} />;
          }

          return icon;
        }
      })}
    >
      <Stack.Group>
        <Stack.Screen
          name='InnerStack'
          component={InnerStack}
          options={{
            headerShown: false,
            headerTitle: 'Home',
            title: 'Home',
          }}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name='TrackCreate'
          component={TrackCreateScreen}
          options={{
            headerTitle: 'Add Track',
            title: 'Add Track',
          }}
        />
        <Stack.Screen
          name='Account'
          component={AccountScreen}
          options={{
            headerShown: false,
            headerTitle: 'Account',
          }}
        />
      </Stack.Group>
    </Tab.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name='Signup'
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Signin'
          component={SigninScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Screen
        name='Home'
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <NavigationContainer ref={(navigator) => setNavigator(navigator)}>
            <StackNavigator />
          </NavigationContainer>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}
