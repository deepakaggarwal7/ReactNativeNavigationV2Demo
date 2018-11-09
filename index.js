/** @format */
import { Navigation } from "react-native-navigation";
import {Provider} from 'react-redux'
import App from './App';
import SharePlace from './src/screens/SharePlace'
import FindPlace from './src/screens/FindPlace'
import configuerStore from './store/configureStore'


const store = configuerStore();

Navigation.registerComponentWithRedux(`navigation.playground.WelcomeScreen`, () => App, Provider, store);
Navigation.registerComponentWithRedux(`navigation.playground.s1`, () => SharePlace, Provider, store);
Navigation.registerComponentWithRedux(`navigation.playground.s2`, () => FindPlace, Provider, store);

Navigation.events().registerAppLaunchedListener(() => {
      /*Navigation.setRoot({
        root: {
          component: {
            name: "navigation.playground.WelcomeScreen"
          }
        }
      });*/

      Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [{
              stack: {
                children: [{
                  component: {
                    name: 'navigation.playground.s1',
                    passProps: {
                      text: 'This is tab 1'
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    text: 'Tab 1',
                    icon: require('./images/camera.png'),
                    testID: 'FIRST_TAB_BAR_BUTTON'
                  }
                }
              }
            },
            {
              component: {
                name: 'navigation.playground.s2',
                passProps: {
                  text: 'This is tab 2'
                },
                options: {
                  bottomTab: {
                    text: 'Tab 2',
                    icon: require('./images/camera.png'),
                    testID: 'SECOND_TAB_BAR_BUTTON'
                  }
                }
              }
            }]
          }
        }
      });


    });