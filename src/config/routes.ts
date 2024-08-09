import IRoute from '@interfaces/IRoute'
import NotFound from '@views/NotFound'
import Home from '@views/Home'
import Portfolio from '@views/Portfolio'
import Resume from '@views/Portfolio/indexResume'
import { Login, Register } from '@views/auth'
import Article from '@views/Article'
import CreateArticle from '@views/CreateArticle'

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Portfolio',
        component: Portfolio,
        exact: true,
    },
    {
        path: '/resume',
        name: 'Resume',
        component: Resume,
        exact: true,
    },
    {
        path: '/article',
        name: 'Article',
        component: Article,
        exact: true,
    },
    {
        path: '/new',
        name: 'CreateArticle',
        component: CreateArticle,
        exact: true,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        exact: true,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        exact: true,
    },
    {
        path: '/*',
        name: 'NotFound',
        component: NotFound,
        exact: true,
    },
]

export default routes
