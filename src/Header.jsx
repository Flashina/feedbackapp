import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const headStyles = {
    backgroundColor: bgColor,
    color: textColor,
    // backgroundColor: 'blue', color: 'red'
  };

  return (
    <header style={headStyles}>
      {/* // <header style={{backgroundColor: 'blue', color: 'red'}}> */}
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6", 
};

Header.PropTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
