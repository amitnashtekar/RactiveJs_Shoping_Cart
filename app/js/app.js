/**
 * Created by amita on 5/18/2016.
 */
import Ractive from 'ractive';
import template from './views/app.html';
import SearchUserComponent from './components/layout/search-user';
import HomePageComponent from './components/home-page';
import UserPageComponent from './components/user-page';
import RouterComponent from './components/layout/router';
import * as RouterPlugin from './plugins/router';
import routesConfiguration from './config/routes';

let App=new Ractive({
    el:'#app',
    template:template,
    components: {
        SearchUser: SearchUserComponent,
        HomePage: HomePageComponent,
        UserPage: UserPageComponent,
        Router:RouterComponent
    },
    data:{
        name:'Amit',
        componentName: 'HomePage'

    },
    oninit() {
    RouterPlugin.init(routesConfiguration, this.onNavigation.bind(this));
    console.log('App::oninit# Application initialized!');
    },
    onNavigation(error, navigationContext) {
        console.log('APP::onNavigation# Navigating to:', navigationContext.pageName, 'with context:', navigationContext);

        if (error) {
            console.warn('App::onNavigation# Error navigating:', error);
        } else {
            this.set({
                req: {
                    params: navigationContext.params,
                    body: navigationContext.state
                },
                componentName: navigationContext.pageName
            });
        }
    }

});

export default App