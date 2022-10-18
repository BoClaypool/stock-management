import React from "react";

import { useSelector } from "react-redux";

import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";

import TableItem from "./TableItem";

export default function TableArea() {
  const list = useSelector((state) => state.product);

  return (
    <Table variant="unstyled" mt={4}>
      <Thead>
        <Tr color="gray">
          <Th>Name of supplement</Th>
          <Th>Total Amount of Supplement</Th>
          <Th isNumeric>Cost</Th>
          <Th isNumeric>Del / Edit</Th>
        </Tr>
      </Thead>
      <Tbody>
        {list.map((item, index) => (
          <TableItem key={index} data={item} />
        ))}
      </Tbody>
    </Table>
  );
}
