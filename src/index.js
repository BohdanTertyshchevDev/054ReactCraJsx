import React from "react";
import { createRoot }  from "react-dom/client";
import Counter from "./components/Counter";
import * as MyMath from "./components/Math";

console.log(MyMath.sum(3, 3));


const root = createRoot(document.getElementById('root'));

root.render(<Counter/>);