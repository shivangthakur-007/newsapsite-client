import "./App.css";
import Homepage from "./Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Readnews from "./Readnews/Readnews";
import Category from "./Readnews/Dashboard/Category";
import NotFound from "./Homepage/NotFound";
import Grocery from "./Readnews/Dashboard/dailygrocerystore/Grocery";
import Grocerytemplate from "./Readnews/Dashboard/Category/Grocerytemplate";
import Grocerytrack from "./Readnews/Dashboard/dailygrocerystore/TrackingOrder/Grocerytrack";
import GroceryCheckout from "./Readnews/Dashboard/dailygrocerystore/Checkout/groceryCheckout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/read" element={<Readnews />}></Route>
        <Route path={"/read/:useparam"} element={<Category />}></Route>
        <Route path="/grocery" element={<Grocery />}></Route>
        <Route path="/grocerytemplate" element={<Grocerytemplate />}></Route>
        <Route path="/grocery/order-tracking" element={<Grocerytrack />}></Route>
        <Route path="/grocery/checkout" element={<GroceryCheckout />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
