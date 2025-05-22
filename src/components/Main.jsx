import Sidebar from "./Sidebar.jsx";
import MovieList from "./MovieList.jsx";

const Main = ()=>{
    return (
        <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
               <Sidebar/>
                <MovieList/>
            </div>
        </main>
    )
}
export default Main;
