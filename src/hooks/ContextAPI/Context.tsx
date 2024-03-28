import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";


interface ContextValue {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}


export const AppContext = createContext<ContextValue>({ userName: "", setUserName: () => {} });

const Context = () => {
  const [userName, setUserName] = useState("");

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default Context;
