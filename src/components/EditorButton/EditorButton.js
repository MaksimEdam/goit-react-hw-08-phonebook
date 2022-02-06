import PropTypes from "prop-types";
import s from "./EditorButton.module.css";

const EditorButton = ({ type, purpose, callback }) => {
  return (
    <button type={type} className={s[purpose]} onClick={() => callback()}>
      {purpose}
    </button>
  );
};
EditorButton.defaultProps = {
  type: "button",
};
EditorButton.propTypes = {
  type: PropTypes.string,
  purpose: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  args: PropTypes.array,
};

export default EditorButton;
