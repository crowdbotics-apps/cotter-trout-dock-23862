import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList193504Navigator from '../features/ArticleList193504/navigator';
import ArticleList193503Navigator from '../features/ArticleList193503/navigator';
import UserProfile193493Navigator from '../features/UserProfile193493/navigator';
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
ArticleList193504: { screen: ArticleList193504Navigator },
ArticleList193503: { screen: ArticleList193503Navigator },
UserProfile193493: { screen: UserProfile193493Navigator },
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
