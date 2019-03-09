import React from "react";
import usePoll from "./usePoll";
import useTotalOf from "./useTotalOf";

function Poll({ polls }) {
  const [picked, setPicked] = React.useState(false);
  const [choices, setChoices] = usePoll([]);
  const total = useTotalOf(choices);

  React.useEffect(
    () => {
      if (polls.length > 2) {
        let error = new Error("Poll must contain only 2 choices");
        console.error(error.message);
        throw error;
      } else {
        setChoices(polls);
      }
    },
    [polls]
  );

  function vote(choice) {
    let votedChoice = choices.map(c => {
      if (c.name === choice.name) {
        return { ...c, total: c.total + 1, classes: [...c.classes, "active"] };
      }
      return c;
    });
    setChoices(votedChoice);
    setPicked(true);
  }

  return (
    <div className="pool">
      {choices.map((choice, i) => {
        let percentage = Math.round((choice.total / total) * 100);
        let classNames = choice.classes.join(" ");
        return (
          <button
            type="button"
            className={classNames}
            onClick={() => vote(choice)}
            disabled={picked}
            key={i}
          >
            <p>{choice.name}</p>
            {picked && <p>{percentage}%</p>}
          </button>
        );
      })}
    </div>
  );
}

export default Poll;
