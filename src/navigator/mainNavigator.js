import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial193492Navigator from '../features/Tutorial193492/navigator';
import NotificationList193464Navigator from '../features/NotificationList193464/navigator';
import Settings193463Navigator from '../features/Settings193463/navigator';
import Settings193455Navigator from '../features/Settings193455/navigator';
import UserProfile193453Navigator from '../features/UserProfile193453/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial193492: { screen: Tutorial193492Navigator },
NotificationList193464: { screen: NotificationList193464Navigator },
Settings193463: { screen: Settings193463Navigator },
Settings193455: { screen: Settings193455Navigator },
UserProfile193453: { screen: UserProfile193453Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
