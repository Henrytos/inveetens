import { ReactNode } from "react";

export function Container({children}:{children:ReactNode}){
    return <main className="w-full max-w-7xl px-4  sm:px-8  m-auto relative"> 
        {children}
    </main>
}