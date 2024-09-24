import "./App.css";
import Homepage from "./Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Readnews from "./Readnews/Readnews";
import Category from "./Readnews/Dashboard/Category";
import NotFound from "./Homepage/NotFound";
import Grocery from "./Readnews/Dashboard/dailygrocerystore/Grocery";
// import { CategoryItems } from "./Readnews/Dashboard/CategoryItems";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/read" element={<Readnews />}></Route>
        <Route path={"/read/:useparam"} element={<Category />}></Route>
        <Route path="/grocery" element={<Grocery />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
