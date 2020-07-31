import React  from 'react';
import { Route, Switch,Redirect} from 'react-router-dom';
import Home from "../webs/home/home";

//主路由
const routers=(
     <Switch>
         <Route path='/web/home' component={Home} />
         <Redirect from="/web" to="/web/home" />
     </Switch>
)

export default routers