import React, { useEffect } from "react";

import Link from "next/link";

import { Flex, Heading, Text, IconButton, Button } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

import { useSelector, useDispatch } from "react-redux";
import { setRevenue, setExpense } from "../store/slices/financeSlice";
import { order } from "../store/slices/productSlice";

import TableArea from "./TableArea";

import { getCurrentDate, formatCurrentMonth } from "../utils/dateUtil";
import { useMask } from "../hooks/useMask";

export default function ContentArea() {
  const list = useSelector((state) => state.product);
  const finance = useSelector((state) => state.finance);
  const dispatch = useDispatch();

  const currentDate = getCurrentDate();
  const mask = useMask();

  useEffect(() => {
    // let revenueCount = 0;
     let expenseCount = 0;

    // loop to complete values ​​in income and expense
    // for (let i in list) {
    //   if (list[i].supplyMod === "Add") {
    //     revenueCount += list[i].totalValue;
    //   } else {
    //     expenseCount += list[i].totalValue;
    //   }
    // }

    for (let i in list) {
         if (list[i].productName == "")
         expenseCount += list[i].totalValue;
    }

    // dispatch(setRevenue(revenueCount));
    dispatch(setExpense(expenseCount));
  }, [list]);

  return (
    <Flex
      w="85%"
      p="3%"
      flexDir="column"
      overflow="auto"
      minH="100vh"
      background="#F3F3F7"
    >
      <Flex flexDir="row">
        <Flex
          flexDir="column"
          padding="5"
          marginRight={5}
          background="#ADC7FF"
          borderRadius={10}
          minW="150px"
        >
          <Text color="#fff" fontSize="sm">
            Total Spend
          </Text>
          <Text color="#fff" fontWeight="bold" fontSize="2xl">
            {mask.toUSD(finance.expense)}
          </Text>

        </Flex>
        <Flex
          flexDir="column"
          padding="5"
          marginRight={5}
          background="#ADC7FF"
          borderRadius={10}
          minW="150px"
        >
          <Text color="#fff" fontSize="sm">
            Monthly Spend
          </Text>
          <Text color="#fff" fontWeight="bold" fontSize="2xl">
            {mask.toUSD(finance.revenue)}
          </Text>

        </Flex>
        <Flex
          flexDir="column"
          padding="5"
          marginRight={5}
          background="#ADC7FF "
          borderRadius={10}
          minW="150px"
        >
          <Text color="#fff" fontSize="sm">
            Annual Spend
          </Text>
          <Text color="#fff" fontWeight="bold" fontSize="2xl">
            {mask.toUSD(finance.revenue)}
          </Text>

        </Flex>
      </Flex>

      <Flex justifyContent="space-between" mt={8}>
        <Flex align="flex-end">
          <Heading as="h2" size="lg" letterSpacing="tight">
            Supplements
          </Heading>
        </Flex>
        <Flex gap={10}>
          <Button onClick={() => dispatch(order())}>
            <Text fontWeight="normal" fontSize="16">
              List [A-Z]
            </Text>
          </Button>
          <Link href="/add">
            <IconButton icon={<FiPlus />} />
          </Link>
        </Flex>
      </Flex>
      <Flex flexDir="column">
        <Flex overflow="auto">
          {list.length !== 0 && <TableArea />}
          {list.length === 0 && (
            <Flex mt={50}>
              <Text fontSize="25" m="auto">
                Your home supplement inventory is empty!  You should get some...
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
