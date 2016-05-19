/**
 * Created by amita on 5/19/2016.
 */
'use strict';

import router from '../plugins/router';
import HomePage from '../components/home-page';
import UserPage from '../components/user-page';

var routes = new Map();

routes.set('/', (context, next) => {
    next(null, HomePage);
});

routes.set('/user/:username', (context, next) => {
    next(null, UserPage);
});

export default routes;
