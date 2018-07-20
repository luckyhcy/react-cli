import React from "react";
import Loadable from 'react-loadable';
const MyLoadingComponent = ({isLoading, error}) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};
const Login = Loadable({
    loader: () => import('../views/login/index'),
    loading: MyLoadingComponent
});
const Index = Loadable({
    loader: () => import('../views/index/index'),
    loading: MyLoadingComponent
});
const aa = Loadable({
    loader: () => import('../views/indexContent/index'),
    loading: MyLoadingComponent
});

const CustomerStatistics = Loadable({
    loader: () => import('../views/CustomerStatistics/index'),
    loading: MyLoadingComponent
});

const rollUpload = Loadable({
    loader: () => import('../views/rollUpload/index'),
    loading: MyLoadingComponent
});
const routes = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/index",
        component: Index,
        routes: [
            {
                path: "/index/aa",
                component: aa,
                routes: [
                    {
                        path: "/index/aa/CustomerStatistics",
                        component: CustomerStatistics
                    },
                    {
                        path: "/index/aa/rollUpload",
                        component: rollUpload
                    }
                ]
            }
        ]
    }
];

export default routes