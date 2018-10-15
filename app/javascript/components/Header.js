import React from "react"
import PropTypes from "prop-types"
class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
      	<header className="main-header">
      		<div className="container">
      			<div className="withPaddingTop">
      				<img src="/assets/zak-updated-white.svg" className="logo" />
      			</div>
      		</div>
      	</header>
      </React.Fragment>
    );
  }
}

export default Header
