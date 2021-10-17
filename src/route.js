// we import all the pages that we want to add to our app
import Boot from './pages/boot';
import NotFound from './pages/NotFound';
import BackUp from './focus_backup';
import Movies from './pages/movie';

export default {
    boot: (params)=>{
        console.log(params)
        // boot request will always fire
        // on root and deeplink
    },
    // First we define a root, this is the hash were the browser will point to
    // at the moment that you boot your app
    // root: 'home',
    // Next we can define the rest of our routes
    routes: [{
        path: '$',
        component: Boot,
    },
    {
        path: '*',
        component: NotFound,
    },
    {
        path: 'myHome',
        component: BackUp,
    },
    {
        path: 'myHome/movie',
        component: Movies,
    }
    ],
    beforeEachRoute: async(from ,to)=>{
        return true;
    }
}