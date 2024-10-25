import React from "react";
import CardCompleted from "../cards/CardCompleted";

const CompletedTasks = () => {
  return (
    <div className="flex flex-wrap justify-start gap-8">
      <CardCompleted
        date="Oct 25, 2024"
        task="Web App"
        category="Shopping"
        progress={100}
        days_left={20}
      />
      <CardCompleted
        date="Oct 25, 2024"
        task="Web App"
        category="Shopping"
        progress={100}
        days_left={20}
      />
      <CardCompleted
        date="Oct 25, 2024"
        task="Web App"
        category="Shopping"
        progress={100}
        days_left={20}
      />
      <CardCompleted
        date="Oct 25, 2024"
        task="Web App"
        category="Shopping"
        progress={100}
        days_left={20}
      />
      <CardCompleted
        date="Oct 25, 2024"
        task="Web App"
        category="Shopping"
        progress={100}
        days_left={20}
      />
      <CardCompleted
        date="Oct 25, 2024"
        task="Web App"
        category="Shopping"
        progress={100}
        days_left={20}
      />
    </div>
  );
};

export default CompletedTasks;
