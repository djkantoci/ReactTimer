var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="grid-x align-center">
        <div className="small-4 cell">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
