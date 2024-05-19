import Heartlogo from '../assets/heart.svg';
import Heart from './Heart';

const Heart = (props) => {
    return (
        <div className= 'heart'>
          <img className= 'heart-img' src= {Heartlogo} alt= 'heart' />
          <p className= 'heart-message'>{props.msg}</p>
        </div>
    );
  };

  export default Heart;