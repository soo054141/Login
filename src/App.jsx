import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Greeting from "./pages/Greeting";

function App() {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/greeting" component={Greeting} />
        </div>
    );
}

export default App;
