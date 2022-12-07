// Layouts
import { HeaderOnly } from '~/components/Layout/';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Routes dùng khi không cần đăng nhập
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];

// Routes dùng khi phải cần đăng nhập, nếu không đăng nhập thì đẩy sang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
