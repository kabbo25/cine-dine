import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import CartModal from "./components/CartModal.jsx";
import {MovieContextProvider} from "./context/ThemeContext.jsx";

function App() {
    const [showCartModal, setShowCartModal] = useState(false);
    const handleShowCartModal = () => {
        setShowCartModal(true);
    }
    return (
        <MovieContextProvider>

        <div className={"dark:bg-body bg-white font-[Sora] dark:text-white text-dark"}>
            {
                showCartModal && <CartModal onClose={()=>{setShowCartModal(false)}}/>
            }
            <Header onShowModal={handleShowCartModal}/>
            <Main/>
            <Footer/>
        </div>
        </MovieContextProvider>
    )
}

export default App;
