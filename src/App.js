import "./App.css"
import { Layout } from 'antd';
import Headers from "./components/Header";
import Contents from "./components/Content";
import Footers from "./components/Footer";


const App = () => {
    return (
        <Layout className="layout">

            <Headers />

            <Contents />

            <Footers />

        </Layout>
    );
};
export default App;