import React from "react";
import { Route } from "react-router-dom";
import { Home, Register, Greeting } from "./components";

function App() {
    return (
        <div>
            <Route exact path="/Login" component={Home} />
            <Route path="/Login/register" component={Register} />
            <Route path="/Login/greeting" component={Greeting} />
        </div>
    );
}

export default App;
