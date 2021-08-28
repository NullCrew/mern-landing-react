import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error404 from './Error404';
import Home from './Home';

function Router() {
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/404' component={Error404} />
                <Redirect to='/404' />
            </Switch>
        </div>
    )
}

export default Router;