
import { stat } from 'fs';
import { MouseEventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom';



type Props = {
    className: string;
    onMouseEnter: MouseEventHandler<HTMLAnchorElement>;
    onMouseLeave: MouseEventHandler<HTMLAnchorElement>;
    state?:any;
    href: string;
    children: ReactNode;
}

const LinkItem = (props: Props) => {
    return (
        <Link className={`${props.className}`} to={props.href} state={props.state}
            onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}
        >
            {props.children}
        </Link>
    )
}

export default LinkItem;