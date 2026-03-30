import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {    
    const base = 'text-sm bg-yellow-400 uppercase font-semibold tracking-wide text-stone-800 inline-block rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

    const styles = {
        primary: base + ' px-4 py-3 md:px-6 md:py-4',
        small: base + ' px-4 py-2 text-xs md:px-5 md:py-2.5 text-xs',
        secondary: 'border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 uppercase font-semibold tracking-wide text-stone-300 hover:text-stone-800 inline-block rounded-full hover:bg-stone-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-300 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed',
        round: base + ' px-2.5 py-1 md:px-3.5 md:py-2'
    }


    if(onClick) {
        return (
            <button 
                onClick={onClick}
                disabled={disabled}
                className={styles[type]}>
                {children}
            </button>
        )
    }
    if(to) return <Link className={styles[type]} to={to}>{children}</Link>
    return (
        <button 
        disabled={disabled}
        className={styles[type]}>
            {children}
        </button>
    )
}


Button.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    to: PropTypes.string,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button
