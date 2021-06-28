import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./pages";
// import Greeting from "./pages/Greeting";

function App() {
    return (
        <div>
            <Route exact path="/" component={Home} />
            {/* <Route path="/greeting" component={Greeting} /> */}
        </div>
    );
}

export default App;
