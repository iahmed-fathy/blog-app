import AppProvider from "../AppCpntext";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CardList from "./components/Articles/ArticlesList";
import ArticleDetailsPage from "./components/ArticleDetailsPage/ArticleDetailsPage";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CardList />}></Route>
          <Route path="articles/:id" element={<ArticleDetailsPage />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
