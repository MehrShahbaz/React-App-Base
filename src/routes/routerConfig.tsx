import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { urls } from "./urls";

import Login from "@/components/auth/login";
import { selectToken } from "@/store/selectors/authSelector";

const RouterConfig = (): React.ReactElement => {
  const token = useSelector(selectToken);
  console.log(token);

  return (
    <Router>
      <Routes>
        <Route path={urls.login} element={<Login />} />
        <Route path={urls.register} element={<div>Register</div>} />
        <Route path={urls.home} element={<div>Home</div>} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default RouterConfig;
