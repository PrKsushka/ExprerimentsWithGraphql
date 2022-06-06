import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import User from "./pages/user/user";
import Countries from "./pages/countries/countries";

function App() {
    return (
        <Router>
            <ul>
                <li><a href="/user">User</a></li>
                <li><a href="/countries">Counties</a></li>
            </ul>
            <Switch>
                <Route exact={true} component={User} path='/user'/>
                <Route exact={true} component={Countries} path='/countries'/>
            </Switch>
        </Router>
    )
}


export default App;
