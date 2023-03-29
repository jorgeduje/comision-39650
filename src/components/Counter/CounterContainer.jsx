import { useState } from "react";
import CounterPresentation from "./CounterPresentation";

const CounterContainer = () => {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState("");

  const sumar = () => {
    setCounter(counter + 1);
  };

  const restar = () => {
    setCounter(counter - 1);
  };

  const sumar10 = () => {
    setCounter(counter + 10);
  };

  const reiniciar = () => {
    setCounter(0);
  };

  const login = () => {
    setUser("pepito");
  };

  return (
    <div>
      <CounterPresentation
        login={login}
        counter={counter}
        sumar={sumar}
        restar={restar}
        reiniciar={reiniciar}
        sumar10={sumar10}
        user={user}
      />
    </div>
  );
};

export default CounterContainer;
