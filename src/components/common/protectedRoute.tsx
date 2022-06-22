import { lazy } from 'react';
import ArvoSidebar from '../shared/Sidebar';
import { Routes, Route, Navigate  } from 'react-router-dom';

const Header = lazy(() => import("../shared/Header"));

interface Props {
    isAuthenticated: boolean;
    component: any;
}

const IsProtected = (props: Props) => {
    const { isAuthenticated, component: Component } = props;
    if(!isAuthenticated) {
        return (
            <Routes>
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
            </Routes>
        )
    }

    if(isAuthenticated) {
        return ( 
            <>
            <div className="grid grid-cols-5 gap-5">
         <div className="bg-white">
           <ArvoSidebar />
         </div>
         <div className="col-span-4 pr-5">
            <Header />
            <Component />
         </div>
         </div>
            </>
        )
    }

}

export default IsProtected;