import {getAllMovies} from "../data/data.js";
import MovieCard from "./MovieCard.jsx";
import {useState} from "react";
import MovieDetailsModal from "./MovieDetailsModal.jsx";
import {useMovie} from "../context/ThemeContext.jsx";

const MovieList = () => {
    const movies = getAllMovies();
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const {cartData, setCartData} = useMovie();
    const handleAddToCart = (e,movie)=>{
        e.stopPropagation();
        console.log('cart data is', cartData);
        const alreadyAdded = cartData.find((item)=> item.id === movie.id);
        if(alreadyAdded) return;
        setCartData((prev)=>{
            return [...prev, movie];
        });
    }
    const handleShowDetailsModal = (id) => {
        setShowDetailsModal(true);
        setSelectedMovie(movies.find((movie) => movie.id === id));
    }
    const handleCloseDetailsModal = () => {
        if (!showDetailsModal) return;
        setShowDetailsModal(false);
    }
    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {
                    showDetailsModal && <
                        MovieDetailsModal
                        selectedMovie={selectedMovie} onClose={handleCloseDetailsModal}
                        onAddToCart={handleAddToCart}
                    />
                }
                {
                    movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onOpenModal={handleShowDetailsModal}
                            onAddToCart ={handleAddToCart}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default MovieList;
