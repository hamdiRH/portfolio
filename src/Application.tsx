import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
    RouteChildrenProps,
} from 'react-router-dom'
import routes from './config/routes'
import UserContextProvider from './contexts/UserContextProvider'

import { Provider } from 'react-redux'
import { store } from '@store/store'

const Application: React.FunctionComponent<{}> = () => {
    return (
        <UserContextProvider>
            <Provider store={store}>
                <div>
                    <BrowserRouter>
                        <Switch>
                            {routes.map((route, index) => {
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        render={(
                                            props: RouteChildrenProps<any>
                                        ) => (
                                            <route.component
                                                name={route.name}
                                                {...props}
                                                {...route.props}
                                            />
                                        )}
                                    />
                                )
                            })}
                        </Switch>
                    </BrowserRouter>
                </div>
            </Provider>
        </UserContextProvider>
    )
}

export default Application
