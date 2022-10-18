import { useDispatch } from "react-redux";
import { del } from "../store/slices/productSlice";

import { formatCurrentMonth } from "../utils/dateUtil";
import { useMask } from "../hooks/useMask";

import Link from "next/link";

import {
  Tr,
  Td,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { FiX, FiClipboard } from "react-icons/fi";

export default function TableItem({ data }) {
  const mask = useMask();
  const dispatch = useDispatch();

  const handleDelItem = () => {
    if (confirm("Delete this supplement?")) {
      dispatch(del({ id: data.id }));
    }
  };

  return (
    <Tr>
      <Td>
        <Flex align="center">
          <Flex flexDir="column">
            <Heading size="sm" letterSpacing="tight">
              {data.productName}
            </Heading>
            <Text fontSize="sm" color="gray">
              {formatCurrentMonth(data.dateMade)}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td isNumeric>
        <Text fontWeight="bold" display="inline-table">
          {data.productTotalAmtPurchased}
        </Text>
      </Td> 
      <Td isNumeric>
        <Text fontWeight="bold" display="inline-table">
          {mask.toUSD(data.totalValue)}
        </Text>
      </Td>
      <Td>
        <Link href={`/product/${data.id}`}>
          <IconButton icon={<FiClipboard />} mr={5} />
        </Link>
        <IconButton icon={<FiX />} onClick={handleDelItem} />
      </Td>
    </Tr>
  );  
}
