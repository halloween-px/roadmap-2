import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({children, darkHeader = false}) => {
    return (
        <div>
            <Header darkHeader = {darkHeader} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;