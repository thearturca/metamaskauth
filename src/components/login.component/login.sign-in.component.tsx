
interface LoginSignInComponentProps {
    onClick(): void;
}
function LoginSignInComponent(props: LoginSignInComponentProps) {
  return (
    <>
        <h1 className="header">Please login</h1>
        <span className="text"> 
            MetaMask is locked - please login
        </span>
        <button onClick={ props.onClick } className="btn">
            Get public key
        </button>
    </>
  )
}

export default LoginSignInComponent