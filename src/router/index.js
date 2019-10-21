import Vue from 'vue';
import Router from 'vue-router';
import ProfilePage from "../views/ProfilePage";
import HomePage from "../views/HomePage";

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/profile',
            name: 'Profile',
            component: ProfilePage,
            props(route) {
                return {starShip: route.query.starShip}
            }
        }
    ]
})