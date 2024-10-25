import React from "react";
import NavItems from "./NavItems";

const InfluencersNavbar = (props: any) => {
  return (
    <div className="">
      <div className="flex items-center gap-4 text-white">
        <span
          onClick={() => props.setActivePage("CurrentTasks")}
          className="cursor-pointer"
        >
          <NavItems
            section_name="Current Tasks"
            page_name="current"
            isActive={props.activePage == "CurrentTasks"}
          />
        </span>

        <span
          onClick={() => props.setActivePage("CompletedTasks")}
          className="cursor-pointer"
        >
          <NavItems
            section_name="Completed Tasks"
            page_name="completed"
            isActive={props.activePage == "CompletedTasks"}
          />
        </span>

        <span
          onClick={() => props.setActivePage("UpcomingTasks")}
          className="cursor-pointer"
        >
          <NavItems
            section_name="Upcoming Tasks"
            page_name="upcoming"
            isActive={props.activePage == "UpcomingTasks"}
          />
        </span>
      </div>
    </div>
  );
};

export default InfluencersNavbar;
