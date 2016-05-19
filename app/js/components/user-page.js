/**
 * Created by amita on 5/19/2016.
 */
import Ractive from 'ractive';
import Template from '../views/user-page.html';
import UserProfile from './user/profile-section';
import Repos from './user/repos-section';
import Notes from './user/notes-section';

var UserPage = Ractive.extend({
    template: Template,
    components: {
        UserProfile: UserProfile,
        Repos: Repos,
        Notes: Notes
    }
});

export default UserPage;
