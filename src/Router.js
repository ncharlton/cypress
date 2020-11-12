import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import { Hello }  from './Hello'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ App } />
                <Route path="/hello" component={ Hello } />
            </Switch>
        </BrowserRouter>
    )
}
export { Router }
