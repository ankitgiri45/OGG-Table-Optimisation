import React from "react";
import "./OGG.scss";

const OGGIndex = ({
  collapseArr,
  headers,
  minWidth,
  rowHeight,
  collapseHeight,
  toggleCollapse,
  collapseState
}) => {
  return (
    <div
      className="ogg-table-index"
      style={{
        minWidth: minWidth
      }}
    >
      {collapseArr.map((collapse, collapseIndex) => (
        <>
          {collapse.title && (
            <div
              className="ogg-table-collapse-target"
              style={{
                minHeight: collapse.title ? collapseHeight : 0
              }}
              onClick={() => {
                toggleCollapse(collapseIndex);
              }}
            >
              {collapse.title}
            </div>
          )}
          <div
            style={{
              minHeight: collapse.title ? collapseHeight : 0,
              background: "red"
            }}
          />
          {(collapseState[collapseIndex] || !collapse.title) && (
            <div className="ogg-table-collapse">
              {headers
                .slice(
                  collapseIndex === 0 ? 0 : collapse.start,
                  (collapseIndex === 0 ? 0 : collapse.start) + collapse.count
                )
                .map((cell, celli) => (
                  <div
                    key={celli}
                    className={"ogg-table-index-cell"}
                    style={{
                      minWidth: minWidth,
                      maxWidth: minWidth,
                      minHeight: rowHeight
                    }}
                  >
                    {cell}
                  </div>
                ))}
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default OGGIndex;
export { OGGIndex };
