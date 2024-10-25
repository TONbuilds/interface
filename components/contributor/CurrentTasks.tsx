import React from "react";
import CardCurrent from "../cards/CardCurrent";

const CurrentTasks = () => {
  return (
    <div className="flex flex-wrap justify-start gap-8">
      <CardCurrent date="Oct 25, 2024" task="Mobile Dev" category="Shopping" progress={30} days_left={20} />
      <CardCurrent date="Oct 25, 2024" task="Mobile Dev" category="Shopping" progress={30} days_left={20} />
      <CardCurrent date="Oct 25, 2024" task="Mobile Dev" category="Shopping" progress={30} days_left={20} />
      <CardCurrent date="Oct 25, 2024" task="Mobile Dev" category="Shopping" progress={30} days_left={20} />
      <CardCurrent date="Oct 25, 2024" task="Mobile Dev" category="Shopping" progress={30} days_left={20} />
      <CardCurrent date="Oct 25, 2024" task="Mobile Dev" category="Shopping" progress={30} days_left={20} />
    </div>
  );
};

export default CurrentTasks;
