import './App.module.scss';
import React from 'react';
import {SearchBar} from "./components/SearchBar/SearchBar";
import {Wallpaper} from "./components/Wallpaper/Wallpaper";
import {Weather} from "./components/Weather/Weather";
import {Container} from "react-bootstrap";
import {Provider} from "react-redux";
import {store} from "./store/weather";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Wallpaper/>
                <Container>
                    <SearchBar/>
                    <Weather/>
                </Container>
            </Provider>

        </div>
    );
}

export default App;
