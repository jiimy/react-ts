import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import TodoForm from './component/TodoForm';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/todo"  component={TodoForm}/>
      </Switch>
    </BrowserRouter>
  )
}


export default Router