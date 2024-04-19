import PropTypes from "prop-types";

Button.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number,
    activated: PropTypes.bool
  };

export function Button({title, amount, activated}) {
    console.log({ amount, activated});
    return <button>
        {title}
    </button>

}
