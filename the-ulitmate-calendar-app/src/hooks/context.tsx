
import { useEffect, useState, createContext, PropsWithChildren, useContext } from "react";
import useGlobalStates from "./useGlobalStates";

/// Her bør du lese om useReeduser!!!
// reactContext

interface Test  {
 test: string;
}


export const TopContext = createContext<Test>({ test: ""});

const ContextProveider = (props: PropsWithChildren) => {


  return <TopContext.Provider value={}>{props.children}</TopContext.Provider>
}

const useTopBarConext = ()=> {
 return useContext(TopContext)
 
}
