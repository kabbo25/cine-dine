import {useMovie} from "../context/MovieContext.jsx";
import {useTheme} from "../context/ThemeContext.jsx";

const Header = ({onShowModal}) => {
    const {cartData} = useMovie();
    const {theme, setTheme} = useTheme();
    return (
        <header>
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src="/assets/logo.svg" width="139" height="26" alt=""/>
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                           href="#">
                            <img src="/assets/ring.svg" width="24" height="24" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                           href="#"
                           onClick={() => {
                               setTheme((prev) => prev === "dark" ? "light" : "dark");

                           }}>
                            {
                                theme === "dark" ? <img src="/assets/icons/sun.svg" width="24" height="24" alt=""/> :
                                    <img src="/assets/icons/moon.svg" width="24" height="24" alt=""/>
                            }

                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                           href="#"
                           onClick={onShowModal}>
                            <img src="/assets/shopping-cart.svg" width="24" height="24" alt=""/>
                            {cartData.length > 0 && (
                                <span
                                    className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                                    {cartData.length}
                                </span>
                            )}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
