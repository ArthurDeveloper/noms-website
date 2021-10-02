import { useState, useEffect, useRef } from 'react';


type Props = {
    children: string
};

export default function TypeWriter({ children }: Props) {

    const text = children;
    const [typedLetters, setTypedLetters] = useState<string>('');
    const index = useRef(0);

    useEffect(() => {
        const inFirstLetter = typedLetters === ''; 
        if (!inFirstLetter) {
            index.current++;
        }

        const allTextWritten = text === typedLetters;
        if (allTextWritten) {
            return;
        }

        setTimeout(() => {  
            setTypedLetters(typedLetters + text[index.current]);
        }, 15);
    }, [typedLetters]);


    return (
        <>
            {typedLetters}
        </>
    );
}