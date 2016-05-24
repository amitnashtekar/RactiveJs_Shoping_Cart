/**
 * Created by amita on 5/23/2016.
 */

import * as ajax from '../plugins/ajax';

const GITHUB_BASE_URL = 'https://api.github.com';

class User {

    constructor(profile, repos, notes) {
        this.profile = profile;
        this.repos = repos;
        this.notes = notes || []; // Default parameters values are only valid for undefined ones
    }

    static findByName(username) {
        let userProfileUrl = GITHUB_BASE_URL+'/users/'+username,
        userReposUrl = GITHUB_BASE_URL+'/users/'+username+'/repos';

        let result = new Promise((resolve, reject) => {
                Promise.all([
                    ajax.getJson(userProfileUrl),
                    ajax.getJson(userReposUrl),
                ])
                .then(values => {
                resolve(new User(values[0], values[1]));
    })
.catch(reject);
});

return result;
}
}

export default User;
