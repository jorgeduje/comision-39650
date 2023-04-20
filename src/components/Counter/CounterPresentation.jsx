const CounterPresentation = ({ sumar, restar, counter }) => {
  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <h3>{counter}</h3>
      <button onClick={restar}>Restar</button>
    </div>
  );
};

export default CounterPresentation;
