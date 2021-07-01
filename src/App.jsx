import React from "react";
import { Route } from "react-router-dom";
import { Home, Register, Greeting } from "./pages";

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
