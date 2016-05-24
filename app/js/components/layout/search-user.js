/**
 * Created by amita on 5/18/2016.
 */
import Ractive from 'ractive';
import Template from '../../views/layout/search-user.html';
import * as router from '../../plugins/router';

let SearchGithub = Ractive.extend({
    isolated: true,
    template: Template,

    oninit(){
    this.on('searchUser',(event)=>{
        event.original.preventDefault();
    let username=event.context.query;
    console.log('you are searching for this user :',username);
    router.navTo('/user/'+username);
    this.set('query', '');
    })

     },
   data:{
       query:''
   }

});

export default SearchGithub
