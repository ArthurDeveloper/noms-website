import { createContext, useState } from 'react';

type DropDownListContextProps = {
    droppedDown: boolean,
    setDroppedDown: (new_value: boolean) => void
};

const DropDownListContext = createContext<DropDownListContextProps>({
    droppedDown: false,
    setDroppedDown: (new_value: boolean) => {}
});

type Props = {
    children: JSX.Element | JSX.Element[]
}

export function DropDownListProvider({ children }: Props) {

    const [droppedDown, setDroppedDown] = useState(false);

    return (
        <DropDownListContext.Provider value={{
                                            droppedDown: droppedDown,
                                            setDroppedDown: setDroppedDown
                                        }}>
            { children }
        </DropDownListContext.Provider>
    );
};

export default DropDownListContext;
