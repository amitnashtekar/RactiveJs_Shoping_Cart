/**
 * Created by amita on 5/18/2016.
 */
import Ractive from 'ractive';
import template from './views/app.html';
import SearchUserComponent from './components/layout/search-user';
import HomePageComponent from './components/home-page';

let App=new Ractive({
    el:'#app',
    template:template,
    components: {
        SearchUser: SearchUserComponent,
        HomePage: HomePageComponent
    },
    data:{
        name:'Amit'
    }

});

export default App