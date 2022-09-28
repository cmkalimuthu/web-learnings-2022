import { Fragment } from "react";

const Button = (props) => {
  return (
  <Fragment>
    <button>{props.children}</button>
  </Fragment>
  );
};
export default Button;
