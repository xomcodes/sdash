import { Table } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

import { builder } from "../api/builder";

export function TotalPointsTable() {
  const { data: suppliesData } = useQuery({
    queryFn: () => builder.use().supplies.forecast(),
    queryKey: builder.supplies.forecast.get(),
    select: ({ data }) => data?.data,
  });

  const rows = suppliesData?.map((element, idx) => (
    <tr key={idx}>
      <td className=" !font-normal !whitespace-nowrap  !text-[#A8A8A8] ">
        {element?.name}
      </td>
      <td className="!font-normal  !text-[#A8A8A8] ">
        {element?.actual_value}
      </td>
      <td className="!font-normal  !text-[#A8A8A8] ">
        {element?.forecasted_value}
      </td>
      <td className="!font-normal  !text-[#A8A8A8] ">{element?.q1_variance}</td>
      <td className="!font-normal  !text-[#A8A8A8] ">{element?.q2_variance}</td>
      <td className="!font-normal  !text-[#A8A8A8] ">{element?.q3_variance}</td>
      <td className="!font-normal  !text-[#A8A8A8] ">{element?.q4_variance}</td>
    </tr>
  ));

  return (
    <Table verticalSpacing={16}>
      <thead className=" border-black">
        <tr className=" border-b border-b-[#121212] text-[#121212]">
          <th>Name</th>
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
