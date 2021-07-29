import React from "react";
import StatsBar from "./StatsBar";

const Stats = ({ stats }) => {
  return (
    <div>
      {stats?.map((item) => (
        <StatsBar title={item.stat.name} val={item.base_stat} />
      ))}
    </div>
  );
};

export default Stats;
