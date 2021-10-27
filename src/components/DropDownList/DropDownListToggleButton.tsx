import { useContext } from 'react';
import DropDownListContext, { DropDownListProvider } from './DropDownListContext'; 


type Props = {
    children: JSX.Element | JSX.Element[] | string
};

export default function DropDownListToggleButton({ children }: Props) {
    
    const { droppedDown, setDroppedDown } = useContext(DropDownListContext); 

    return (
        <button onClick={() => { setDroppedDown(!droppedDown) } }>
            { children }
        </button>
    );
}