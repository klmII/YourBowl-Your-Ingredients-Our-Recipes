import React, {useState, useEffect} from "react";
import loginImg from "../../login.svg";
import "./style.scss";
import Dashboard from "../../dashboard";
import Profile from "../userPage/profile"

var login = false;

function Login() {
	const [value, setValue] = useState({auth:"true"});
	const [isLogin, setLogin] = useState({auth:"false"});

	const proxyurl = "https://cors-anywhere.herokuapp.com/";

	// function handleChange(event) {
	// 	console.log(event.target.value);
	// 	console.log("Hello");
	// 	setValue(event.target.value);
	// }
	var json;
	async function handleSubmit(event) {
		const url = '/login'

		console.log("making request")
		console.log(event.target[0].value)
		const response = await fetch('/login', {
		  method: "POST",
		  headers: {
		    'Content-type': 'application/json'
		  },
		  body: JSON.stringify({ "username": event.target[0].value, "password": event.target[1].value }),
		});
    json = await response.json();
		console.log(json);

		setValue(json);
		setLogin(json);
		login = true;

		// setValue(json);
		// console.log(value);
    //this.setState({ data: json[0] });

		// fetch(proxyurl + 'http://127.0.0.1:5000/login')
		// 	.then(response => {
		// 		console.log(response)
		// 		return response.json()
		// 	})
		// 	.then(json => {
		// 		console.log = (json)
		// 		// this.setState({
		// 		// 	playerName: json[0]
		// 		// })
		// 	})
		// useEffect(() => {
		// 	fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
		// 	.then(response => response.text())
		// 	.then(contents => console.log("Hello " + contents))
		// 	.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
		// },[])
		// const val = await fetch(proxyurl + url, {
    //     method:"POST",
    //     cache: "no-cache",
    //     headers:{
    //         "content_type":"application/json",
    //     },
    //     body:JSON.stringify(event.target[0].value)
    //     }) // https://cors-anywhere.herokuapp.com/https://example.com
		// .then(response => response.text())
		// .then(contents => console.log("Hello " + contents))
		// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
		//
		// console.log("Done!!!" + val);

		event.preventDefault();
	}

	useEffect(() => {
		console.log(value);
	},[value])

	function loginPage(){
		return (<div className="base-container">
      <div className="header">Login</div>
	  <form onSubmit={handleSubmit} action="javascript:void(0);" method="POST">

		  <div className="content">
			<div className="image">
			  <img src={loginImg} alt="img" />
			</div>
			<div className="form">
			  <div className="form-group">
				<label htmlFor="username">Username</label>
				<input type="text" name="username" placeholder="username" />
			  </div>
			  <div className="form-group">
				<label htmlFor="password">Password</label>
				<input type="password" name="password" placeholder="password" />
			  </div>
			</div>
			<div>
				{value.auth === "false" ? <p style={{color:"red"}}>Invalid username or password</p> : null}
			</div>
		  </div>
		  <div className="footer">
  		  <input className="btn" type="submit" value="Login" />
  			{/*<button type="button" className="btn">
  			  Login
  			</button>*/}
		   </div>
	  </form>
    </div>)
	}

	return (
		<div>
			{/*{ isLogin.auth === "true" ? <Profile/> : <>{loginPage()}</> } */}
			{<>{loginPage()}</>}
		</div>

	);
}
export default Login;
export {login};