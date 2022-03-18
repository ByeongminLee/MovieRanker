import GlobalStyles from 'GlobalStyles';
import Main from 'Pages/Main';
import { Route, Routes } from 'react-router-dom';
const App = () => {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:targetDate" element={<Main />} exact />
            </Routes>
        </>
    );
};

export default App;
