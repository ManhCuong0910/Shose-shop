import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  unstable_HistoryRouter as HistoryBrowser,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Search from "./pages/Search/Search";
import HomeTemplate from "./templates/HomeTemplate";
// Style
import { Provider } from "react-redux";
import "./assets/scss/style.scss";
import { store } from "./redux/configStore";
import { historyConfig } from "./utils/config";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryBrowser history={historyConfig}>
      <Routes>
        <Route path="" element={<HomeTemplate></HomeTemplate>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </HistoryBrowser>
  </Provider>
);
