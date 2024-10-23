import { useRef } from "react";

import Form from "react-bootstrap/Form";

import { verifyUser } from "../../data/users";

import "./Login.css";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <div className="login-container">
      <img src="./Login.png" alt="" />
      <div className="login-mini">
        <Form.Label
          className="username-label bi bi-person-circle"
          htmlFor="username"
        >
          &nbsp;Username
        </Form.Label>
        <Form.Control
          type="text"
          id="username"
          placeholder="user"
          style={{ textAlign: "center" }}
          ref={userRef}
        />
        <Form.Label
          className="username-label bi bi-key-fill"
          htmlFor="password"
        >
          &nbsp;password
        </Form.Label>
        <Form.Control
          type="password"
          id="password"
          placeholder="pass"
          style={{ textAlign: "center" }}
          ref={passRef}
        />
        <button
          className="btn btn-success mt-3 bi bi-box-arrow-in-right"
          onClick={() => {
            const user = userRef.current.value.trim();
            const pass = passRef.current.value.trim();
            userRef.current.value = "";
            passRef.current.value = "";
            const userInfo = verifyUser(user, pass);
            if (userInfo === null) {
              alert("Wrong username or password");
              userRef.current.focus();
            } else {
              setToken(userInfo.token);
              setRole(userInfo.role);
            }
          }}
        >
          &nbsp;Login
        </button>
      </div>
    </div>
  );
}

export default Login;
