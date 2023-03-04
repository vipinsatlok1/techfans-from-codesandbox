import { useEffect } from "react";

interface Props {
    onClick?: () => {};
    svg: string,
}

export const Svg = ({ onClick, svg }: Props) => {

    return (
        <svg
            dangerouslySetInnerHTML={{ __html: svg }}
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
        >
        </svg>
    );
};

