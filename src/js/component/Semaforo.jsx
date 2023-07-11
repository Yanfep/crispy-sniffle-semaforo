// 1. Importamos react & Hooks
import React, { useState }  from "react";

// 2. Otras importaciones
import "/workspaces/crispy-sniffle-semaforo/src/styles/index.css"


// 3. Definimos el componente y exportamos
export const Semaforo = () => {
    //JS function
    // Valor a asignar a una variable
    const [Light, setLight] = useState("#fff81f");
    return (
            <div className="container">
              <div className="handleSemaforoDad"> 
                <div className="handleSemaforo"></div>
              </div>
              <div className="bodySemaforo">
                  <div onClick={() => setLight("red")} className={"lightRedSemaforo" + (Light=== "red" ? " glow " : "" )} ></div>
                  <div onClick={() => setLight("#fff81f")} className={"lightYellowSemaforo" + (Light=== "#fff81f" ? " glow " : "")}></div>
                  <div onClick={() => setLight("#1fff53")} className={"lightGreenSemaforo" + (Light=== "#1fff53" ? " glow " : "")}></div>
                </div>
            </div>
    );
};