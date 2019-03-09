import React from "react";

function usePoll(initChoices) {
  const [state, setState] = React.useState(initChoices);

  function setChoices(choices) {
    setState(choices);
  }

  return [state, setChoices];
}

export default usePoll;
