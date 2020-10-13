import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TouchableHighlight } from 'react-native';
import { IconButton, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../core/theme';
import { Dashboard } from '../screens';
import Profile from '../screens/Profile';
import SearchPage from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const UserTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="ReceiverDashboard"
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: "#2F4F4F",
        labelStyle: {
          fontSize: 15,
          margin: 0,
          padding: 0,
        },
        style: {
          backgroundColor: "#DDD",
          borderTopWidth: 0,
          marginBottom: 0,
          shadowOpacity: 0.05,
          shadowRadius: 10,
          shadowColor: "#CCC",
          shadowOffset: { height: 0, width: 0 }
        }
      }}
    >
      <Tab.Screen
        name="ReceiverDashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="ReceivedList"
        component={Dashboard}
        options={{
          tabBarLabel: 'Received',
          tabBarIcon: ({ color }) => (
            <Icon name="yelp" color={color} size={20} />
          ),
        }}
      />


      <Tab.Screen
        name="RFeedback"
        component={Dashboard}
        options={{
          tabBarLabel: 'Feedback',
          tabBarIcon: ({ color }) => (
            <Icon name="address-card" color={color} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="user-o" color={color} size={20} />
          ),
        }}
      />


    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();

export default UserStack = () => {
  return (
    <Stack.Navigator initialRouteName='Dashboard'>
      <Stack.Screen name="Dashboard" component={UserTabs}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: theme.colors.primary },
          headerLeft: () => (
            <IconButton icon="menu"
              color={theme.colors.white}
              size={25}
              onPress={() => console.log('menu button pressed')} />
          ),
          headerTitle: () => {
            return (
              <TouchableHighlight onPress={() => navigation.navigate('SearchPage')} >
                <Searchbar
                  style={{ borderRadius: 5 }}
                  editable={false}
                  placeholder="Search"
                />
              </TouchableHighlight>)
          },
          headerRight: () => (
            <IconButton icon="camera"
              color={theme.colors.white}
              size={25}
              onPress={() => console.log('right button pressed')} />
          ),
        })}
      />
      <Stack.Screen name="SearchPage" component={SearchPage} options={{ headerShown: false }} />
      <Stack.Screen name="CategoryPage" component={Dashboard} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
