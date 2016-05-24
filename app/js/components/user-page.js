/**
 * Created by amita on 5/19/2016.
 */
import Ractive from 'ractive';
import Template from '../views/user-page.html';
import UserProfile from './user/profile-section';
import Repos from './user/repos-section';
import Notes from './user/notes-section';

var UserPage = Ractive.components.UserPage = Ractive.extend({
    template: Template,
    components: {
        UserProfile: UserProfile,
        Repos: Repos,
        Notes: Notes
    },

        oninit() {
    this.observe('req', (request) => {
        this.set('user', request.body.user);
    });
    }
})

UserPage._name = 'UserPage';
export default UserPage;
