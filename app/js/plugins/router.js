/**
 * Created by amita on 5/19/2016.
 */

import page from 'page';
import Ractive from 'ractive';

function navigationHandler(routeHandler, onNavigation) {
    return function(context/*, next*/) {
        routeHandler(context, (error, PageComponent = {}, data = {}) => {
            context.pageName = PageComponent._name;
        context.state = data;
        onNavigation(error, context);
    })
};
}

export function init(routes, onNavigation) {

    routes.forEach((routeHandler, path) => {
        page(path, navigationHandler(routeHandler, onNavigation));
});

page({
    hashbang: true
});
}

export function navTo(url) {
    page.show(url);
}
