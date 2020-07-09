import React , { useContext } from "react";
import { Link } from 'react-router-dom';

import { InfoContext } from '../../Container/Context/Context';

const Card = (props) => {
    const value = useContext(InfoContext);
    return (
        <div className={props.bg} style={{...props.styles}}>
            <div className={props.categoryClasses}>{props.category}</div>
            <h3>
                <Link onClick={() => value.handleDetail(props.id)} to="/article">Lorem ipsum dolor sit amet.</Link>
            </h3>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
                officia dolor ipsa sunt quo sit perspiciatis repellat pariatur rem
                debitis?
      </p>
        </div>
    );
};

export default React.memo(Card);
