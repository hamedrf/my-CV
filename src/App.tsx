import "./style/app.css";
import "./style/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RestApi } from "./pages/RestApi";
import { Login } from "./pages/Login";
import { Stor } from "./pages/Stor";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { stor } from "./hook/stor";
import { Home } from "./pages/Home";
import { TodoList } from "./pages/todoList";
import { ProductInfo } from "./pages/ProductInfo";
import { Navbar } from "./compnent/Navbar";


function App() {
  const queryClient = new QueryClient();
  return (
    <Provider  store={stor}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/api" element={<RestApi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stor" element={<Stor />} />
          <Route path="/ProductInfo/" element={<ProductInfo/>} />
          
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
      </Provider>
  );
}

export default App;
