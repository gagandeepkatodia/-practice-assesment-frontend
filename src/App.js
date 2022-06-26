import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Spaces from "./pages/Spaces";
import SpaceDetails from "./pages/SpaceDetailsPage";
import MySpace from "./pages/MySpace";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import HeroBanner from "./components/HeroBanner";

const SignUpPage = () => (
  <HeroBanner>
    <h1>SignUp</h1>
  </HeroBanner>
);
// const Other = () => (
//   <HeroBanner>
//     <h1>Other</h1>
//   </HeroBanner>
// );

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<Spaces />} />
        <Route path="/space/:id" element={<SpaceDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myspaces" element={<MySpace />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
