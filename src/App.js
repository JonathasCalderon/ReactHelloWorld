import React from "react";

import Hello from "./components/Hello";
import World from "./components/World";

import styles from "./App.module.css"

const App = () => {
    return (
        <div className={styles.container} >
            <Hello />
            <World />
        </div>
    )
}

export default App;