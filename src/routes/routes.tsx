import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Borrowed1,
  Borrowed2,
  Borrowed3,
  Borrowed4,
  Borrowed5,
  Detail,
  Page404,
  Simulation
} from '../pages'

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Simulation} />
        <Route path="/borrowed-first" exact component={Borrowed1} />
        <Route path="/borrowed-second" exact component={Borrowed2} />
        <Route path="/borrowed-third" exact component={Borrowed3} />
        <Route path="/borrowed-fourth" exact component={Borrowed4} />
        <Route path="/borrowed-fifth/:id" exact component={Borrowed5} />
        <Route path="/detail" exact component={Detail} />

        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  )
};
