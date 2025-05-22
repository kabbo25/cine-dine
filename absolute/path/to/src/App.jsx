import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import CartModal from "./components/CartModal.jsx";
import {MovieContextProvider} from "./context/MovieContext.jsx";
import {ThemeContextProvider, useTheme} from "./context/ThemeContext.jsx";

function AppContent() {
    const [showCartModal, setShowCartModal] = useState(false);
    const {theme} = useTheme(); // Now this works correctly
    console.log(theme);
    
    const handleShowCartModal = () => {
        setShowCartModal(true);
    }
    
    return (
        <MovieContextProvider>
            <div className={`dark:bg-body bg-white font-[Sora] dark:text-white text-dark ${theme ==='dark'?'dark':'light'}`}>
                {
                    showCartModal && <CartModal onClose={() => {
                        setShowCartModal(false)
                    }}/>
                }
                <Header onShowModal={handleShowCartModal}/>
                <Main/>
                <Footer/>
            </div>
        </MovieContextProvider>
    );
}

function App() {
    return (
        <ThemeContextProvider>
            <AppContent />
        </ThemeContextProvider>
    );
}

export default App;