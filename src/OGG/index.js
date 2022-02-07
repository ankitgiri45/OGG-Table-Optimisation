import React, { useState } from "react";
import "./OGG.scss";
import OGGBody from "./OGGBody";
import OGGIndex from "./OGGIndex";

const OGG = ({
  tableData,
  colWidth = 200,
  indexWidth = 140,
  rowHeight = 60,
  collapseHeight = 60
}) => {
  const {
    collapseArr = [],
    index = [],
    footer = [],
    columns = [],
    data = []
  } = tableData;

  const [collapseState, setCollapseState] = useState(
    new Array(collapseArr.length).fill(false)
  );
  const toggleCollapse = (index) =>
    setCollapseState(
      [...collapseState].fill(!collapseState[index], index, index + 1)
    );

  return (
    <>
      <div className="ogg-table">
        {index.length === 0 ? null : (
          <OGGIndex
            collapseArr={collapseArr}
            headers={index}
            minWidth={indexWidth}
            maxWidth={indexWidth}
            rowHeight={rowHeight}
            collapseHeight={collapseHeight}
            toggleCollapse={toggleCollapse}
            collapseState={collapseState}
          />
        )}

        {data.length ? (
          <OGGBody
            collapseArr={collapseArr}
            data={data}
            colWidth={colWidth}
            rowHeight={rowHeight}
            collapseHeight={collapseHeight}
            collapseState={collapseState}
          />
        ) : (
          "No result"
        )}
      </div>
    </>
  );
};

export default OGG;
export { OGG };
