import PropTypes from "prop-types";

// Destructure props object in the parameter list
export default function Input({ id, label, placeholder, type }) {
  return (
    <div>
      {/* Use the label prop (interpolation) */}
      <label htmlFor={id} className="sr-only">
        {label || id.toUpperCase()}
      </label>
      <input
        id={id}
        type={type || "text"}
        className="border border-slate-700 ml-2 pl-2 rounded"
        placeholder={placeholder || label || id}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
