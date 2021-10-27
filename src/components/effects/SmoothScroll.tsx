import { useRef, useState, useEffect } from 'react';

type Props = {
    children: JSX.Element | string,
    to: string
};

export default function SmoothScroll({ children, to }: Props) {

    const [currentScroll, setCurrentScroll] = useState<number>(0);
    const elementPosition = document.querySelector(to)?.getBoundingClientRect().bottom;

    function lerp(a: number, b: number, t: number) {
        return (1-t)*a+t*b;
    }

    useEffect(() => {
        window.scrollTo(0, currentScroll);
        const newScrollPosition = lerp(currentScroll, elementPosition ?? 0, 0.005); 
        if (Math.round(newScrollPosition) !== elementPosition)
            setCurrentScroll(newScrollPosition);
    }, [currentScroll]);

    return (
        <div onClick={() => {
            setCurrentScroll(1);
        }}>
            { children }
        </div>
    );
}
