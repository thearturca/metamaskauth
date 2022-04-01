interface LoginSignedInComponentProps { 
    account: string;
}

function LoginSignedInComponent(props: LoginSignedInComponentProps) {
  return (
    <>
        <h1 className="header">Your public key</h1>
        <span className="text">
            { props.account }
        </span>
    </>
    )
}

export default LoginSignedInComponent