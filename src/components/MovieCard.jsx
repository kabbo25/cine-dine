import {getImgUrl} from "../utility/cine-utility.js";
import Rating from "./Rating.jsx";

const MovieCard = ({movie, onOpenModal, onAddToCart}) => {

    return (
        <figure className="cursor-pointer p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
                onClick={() => onOpenModal(movie.id)}>
            <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt=""/>
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{movie.title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                <Rating currentRating={movie.rating}/>
                <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                   href="#"
                   onClick={(e) => onAddToCart(e, movie)}>
                    <img src="/assets/tag.svg" alt=""/>
                    <span>${movie.price} | Add to Cart</span>
                </a>
            </figcaption>
        </figure>
    )
}
export default MovieCard;
