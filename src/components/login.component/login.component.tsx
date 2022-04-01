import LoginSignInComponent from "./login.sign-in.component";
import LoginSignedInComponent from "./login.signed-in.component";
import "./login.component.css"

interface LoginComponentProps { 
    account: string
    onClick(): void;
}

function LoginComponent(props: LoginComponentProps ) {

  const Component = props.account !== "" ? <LoginSignedInComponent account={ props.account }/> : <LoginSignInComponent onClick={ props.onClick }/>;  
  return (
    <div className="container">
    { Component }
    </div>
  )
}

export default LoginComponent