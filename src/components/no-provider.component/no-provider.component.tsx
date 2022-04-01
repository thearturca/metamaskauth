import "./no-provider.component.css"

function NoProviderComponent() {
  return (
    <div className="no-provider-container container">
        <span className="no-provider-text text">
            MetaMask is not isntalled. Please follow the link below and install MetaMask first. Then refresh this page.
        </span>
        <a href="https://metamask.io/download/" target="_blank" className="btn btn-link">
            Install MetaMask
        </a>
    </div>
  )
}

export default NoProviderComponent