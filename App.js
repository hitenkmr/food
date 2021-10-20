import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import ItemsDetailScreen from './src/screens/ItemsDetailScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ItemsDetail: ItemsDetailScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);