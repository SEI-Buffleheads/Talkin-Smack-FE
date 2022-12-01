import "./Sign_Up.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createUser } from "../../services/apiCalls";

function Sign_Up() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.id]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   const callApi = async () => {
  //     const response = await createUser(user);
  //     console.log(response['token'])
  //     //navigate to the users profile page here
  //   };
  //   callApi();
  // },[submit]);

  return (
    <div className="form-container">
      <div className="form">
        <div className="sign-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={handleChange}
              id="username"
            />
            <input
              type="text"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              id="email"
            />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              id="password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={user.passwordConfirm}
              onChange={handleChange}
              id="re_password"
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign_Up;
