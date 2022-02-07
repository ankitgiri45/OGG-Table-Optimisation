import React from "react";
import "./OGG.scss";

const OGGBody = ({
  collapseArr = [],
  data,
  colWidth = 200,
  rowHeight = 40,
  collapseHeight = 40,
  collapseState
}) => {
  return (
    <div className="ogg-table-grid">
      <div className="d-flex">
        {data.map((col, coli) => (
          <div key={coli} className="ogg-table-grid-col">
            {collapseArr.map((collapse, collapseIndex) => (
              <>
                <div
                  style={{
                    minHeight: collapse.title ? collapseHeight : 0,
                    background: "red"
                  }}
                />
                {(collapseState[collapseIndex] || !collapse.title) && (
                  <div className="ogg-collapse-target">
                    {col
                      .slice(
                        collapseIndex === 0 ? 0 : collapse.start,
                        (collapseIndex === 0 ? 0 : collapse.start) +
                          collapse.count
                      )
                      .map((cell, celli) => (
                        <div
                          key={celli}
                          className={"ogg-table-grid-cell"}
                          style={{
                            minWidth: colWidth,
                            maxWidth: colWidth,
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
        ))}
      </div>
    </div>
  );
};

export default OGGBody;
export { OGGBody };
