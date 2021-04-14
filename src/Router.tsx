import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import TodoMobx from './page/TodoMobx';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/todoform" component={TodoMobx}/>
      </Switch>
    </BrowserRouter>
  )
}


export default Router