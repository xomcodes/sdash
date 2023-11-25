import { Table } from "@mantine/core";
import { useTheme } from "next-themes";

const elements = [
  {
    name: "Office & Supplies",
    actual: "233.457",
    forecast: "123.456",
    time: "123.456",
    date: "123.456",
    location: "123.456",
    varience: "123.456",
  },
  {
    name: "Office & Supplies",
    actual: "233.457",
    forecast: "123.456",
    time: "123.456",
    date: "123.456",
    location: "123.456",
    varience: "123.456",
  },
  {
    name: "Office & Supplies",
    actual: "233.457",
    forecast: "123.456",
    time: "123.456",
    date: "123.456",
    location: "123.456",
    varience: "123.456",
  },
  {
    name: "Office & Supplies",
    actual: "233.457",
    forecast: "123.456",
    time: "123.456",
    date: "123.456",
    location: "123.456",
    varience: "123.456",
  },
  {
    name: "Office & Supplies",
    actual: "233.457",
    forecast: "123.456",
    time: "123.456",
    date: "123.456",
    location: "123.456",
    varience: "123.456",
  },
];
export function TotalPointsTable() {
  const { resolvedTheme, setTheme } = useTheme();
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td className=" !font-normal !whitespace-nowrap  !text-[#A8A8A8] ">
        {element.name}
      </td>
      <td className="!font-normal  !text-[#A8A8A8] ">{element.actual}</td>
      <td className="!font-normal  !text-[#A8A8A8] ">{element.forecast}</td>
      <td className="!font-normal  !text-[#A8A8A8] ">{element.date}</td>
      <td className="!font-normal  !text-[#A8A8A8] ">{element.location}</td>
      <td className="!font-normal  !text-[#A8A8A8] ">{element.location}</td>
      <td className="!font-normal  !text-[#A8A8A8] ">{element.varience}</td>
    </tr>
  ));

  return (
    <Table verticalSpacing={16}>
      <thead className=" border-black">
        <tr className=" border-b border-b-[#121212] text-[#121212]">
          <th>Actual</th>
          <th>Actual</th>
          <th>Forecast</th>
          <th>Variance</th>
          <th>Variance</th>
          <th>Variance</th>
          <th>Variance</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
