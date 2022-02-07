import OGG from "./OGG";
import "bootstrap/dist/css/bootstrap.min.css";

const tableData = {
  columns: [],
  collapseArr: [
    { title: "", count: 1, start: 0 },
    { title: "Custom collapse 1", count: 4, start: 1 },
    { title: "Custom collapse 2", count: 2, start: 5 },
    { title: "Custom collapse 3", count: 2, start: 7 }
  ],
  index: ["", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8"],
  data: [
    [
      <strong>Column 1</strong>,
      "D11",
      "D21",
      "D31",
      "D41",
      "D51",
      "D61",
      "D71",
      "D81"
    ],
    [
      <strong>Column 2</strong>,
      "D12",
      "D22",
      "D32",
      "D42",
      "D52",
      "D62",
      "D72",
      "D82"
    ],
    [
      <strong>Column 3</strong>,
      "D13",
      "D23",
      "D33",
      "D43",
      "D53",
      "D63",
      "D73",
      "D83"
    ],
    [
      <strong>Column 4</strong>,
      "D14",
      "D24",
      "D34",
      "D44",
      "D54",
      "D64",
      "D74",
      "D84"
    ],
    [
      <strong>Column 5</strong>,
      "D15",
      "D25",
      "D35",
      "D45",
      "D55",
      "D65",
      "D75",
      "D85"
    ],
    [
      <strong>Column 5</strong>,
      "D16",
      "D26",
      "D36",
      "D46",
      "D56",
      "D66",
      "D76",
      "D86"
    ],
    [
      <strong>Column 5</strong>,
      "D17",
      "D27",
      "D37",
      "D47",
      "D57",
      "D67",
      "D77",
      "D87"
    ],
    [
      <strong>Column 5</strong>,
      "D18",
      "D28",
      "D38",
      "D48",
      "D58",
      "D68",
      "D78",
      "D88"
    ],
    [
      <strong>Column 5</strong>,
      "D19",
      "D29",
      "D39",
      "D49",
      "D59",
      "D69",
      "D79",
      "D89"
    ],
    [
      <strong>Column 6</strong>,
      "D10",
      "D20",
      "D30",
      "D40",
      "D50",
      "D60",
      "D70",
      "D80"
    ]
  ]
};

export default function App() {
  return (
    <div className="App">
      <h1>OGG example</h1>
      <OGG tableData={tableData} />
    </div>
  );
}
