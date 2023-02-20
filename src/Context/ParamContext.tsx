import {
  createContext,
  Dispatch,
  ReactFragment,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type ChildProp = { children: ReactNode | ReactFragment };
type ContextType = {
  state: string;
  propertyType: string;
  price: string;
  date: string;
  setState: Dispatch<SetStateAction<string>>;
  setPropertyType: Dispatch<SetStateAction<string>>;
  setPrice: Dispatch<SetStateAction<string>>;
  setDate: Dispatch<React.SetStateAction<string>>;
};

const ParamContext = createContext<ContextType>({
  state: "",
  propertyType: "",
  price: "",
  date: "",
  setState: () => {},
  setPropertyType: () => {},
  setPrice: () => {},
  setDate: () => {},
});

const ParamProvider = ({ children }: ChildProp) => {
  const [state, setState] = useState("CA");
  const [propertyType, setPropertyType] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  return (
    <ParamContext.Provider
      value={{
        state,
        propertyType,
        price,
        date,
        setState,
        setPropertyType,
        setPrice,
        setDate,
      }}
    >
      {children}
    </ParamContext.Provider>
  );
};

export { ParamContext, ParamProvider };
