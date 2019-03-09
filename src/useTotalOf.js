import React from "react";

function useTotalOf(choices) {
  const [state, setState] = React.useState(0);

  React.useEffect(
    () => {
      let getTotal = choices.reduce((prev, curr) => {
        return prev + curr.total;
      }, 0);
      setState(getTotal);
    },
    [choices]
  );

  return state;
}

export default useTotalOf;
