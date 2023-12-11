import IRoute from '@interfaces/IRoute'
// import NotFound from '@views/NotFound'
import Home from '@views/Home'
// import { Login, Register } from '@views/auth'
// import Article from '@views/Article'
// import CreateArticle from '@views/CreateArticle'

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        exact: true,
    },
    // {
    //     path: '/article',
    //     name: 'Article',
    //     component: Article,
    //     exact: true,
    // },
    // {
    //     path: '/createArticle',
    //     name: 'CreateArticle',
    //     component: CreateArticle,
    //     exact: true,
    // },
    // {
    //     path: '/login',
    //     name: 'Login',
    //     component: Login,
    //     exact: true,
    // },
    // {
    //     path: '/register',
    //     name: 'Register',
    //     component: Register,
    //     exact: true,
    // },
    // {
    //     path: '/*',
    //     name: 'NotFound',
    //     component: NotFound,
    //     exact: true,
    // },
]

export default routes
