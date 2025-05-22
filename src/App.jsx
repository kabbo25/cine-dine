import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

function App() {
    return (
        <div className={"dark:bg-body bg-white font-[Sora] dark:text-white text-dark"}>
            <Header/>
            <Main/>
        </div>
    )
}

export default App;
