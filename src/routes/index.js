import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import SecTable from "../components/Table/UsersTable";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/table" element={<Private Item={SecTable} />}></Route>
          <Route path="/" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>}/>
          <Route path="*" element={<Login/>} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
