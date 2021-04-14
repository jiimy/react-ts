import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import TodoForm from './components/TodoForm';
import TodoMobx1 from './page/TodoMobx1';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/todoform" component={TodoMobx1}/>
      </Switch>
    </BrowserRouter>
  )
}


export default Router