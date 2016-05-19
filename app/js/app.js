/**
 * Created by amita on 5/18/2016.
 */
import Ractive from 'ractive';
import template from './views/app.html';
import SearchUserComponent from './components/layout/search-user';
import HomePageComponent from './components/home-page';
import UserPageComponent from './components/user-page'
import RouterComponent from './components/layout/router'

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

    }

});

export default App