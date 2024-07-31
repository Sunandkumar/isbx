
import './reusable.css';


const Button = ({text}) => {
  return (
    <button  className="add-button">
      <span className="add-symbol">{text}</span>
    </button>
  );
};

export default Button;
