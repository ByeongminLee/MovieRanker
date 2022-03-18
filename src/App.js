import GlobalStyles from 'GlobalStyles';
import Main from 'Pages/Main';
import { Route, Routes } from 'react-router-dom';
import Meta from 'Components/Meta';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Meta />
            <Routes>
                <Route path="/MovieRanker" element={<Main />} />
                <Route path="/MovieRanker/:targetDate" element={<Main />} exact />
            </Routes>
        </>
    );
};

export default App;
