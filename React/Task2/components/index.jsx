import { createRoot } from 'react-dom/client';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

createRoot(document.getElementById('root')).render(
    <>
        <Header />
        <Main />
        <Footer />
    </>
);