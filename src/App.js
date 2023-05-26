import logo from './logo.svg';
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './blogdetails';
import Notfound from './notfound';

function App() {


  const title = "Welcome to the new blog"

  return (
    <Router>
      <div className="App">

        <Navbar />
        <div className="content">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>
            {/* here :id is the route parameter */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path="*">
              <Notfound />
            </Route>

          </Switch>

        </div>
      </div>
    </Router>
  );

}

export default App;
