import Header from './components/header';
import Footer from './components/footer';

const Layout = ({children}) => {
    return (
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default Layout;
