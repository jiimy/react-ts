import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import mobxIndex from './components/mobx/mobxIndex';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mobx" component={mobxIndex}/>
      </Switch>
    </BrowserRouter>
  )
}


export default Router