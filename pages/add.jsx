import React, { useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { insert } from "../store/slices/productSlice";

import Menu from "../components/Menu";
import { getCurrentDate } from "../utils/dateUtil";

import MaskedInput from "react-text-mask";
import priceMask from "../data/priceMask";

export default function Add() {
  const [productName, setProductName] = useState("");
  // const [productSupplyMod, setProductSupplyMod] = useState("");
  const [productValue, setProductValue] = useState("");
  const [productTotalAmtPurchased, setProductTotalAmtPurchased] = useState ("");
  // const [productQuantityConsumedPerDay, setProductQuantityConsumedPerDay] = useState ("");


  const dispatch = useDispatch();
  const currentDate = getCurrentDate();
  const router = useRouter();

  const handleAddProduct = () => {
    if (productName !== "" && productTotalAmtPurchased !== "" && productValue !== "") {
      dispatch(
        insert({
          productName,
          // productSupplyMod: productSupplyMod,
          productTotalAmtPurchased,
          // productQuantityConsumedPerDay,
          totalValue: parseInt(productValue),
          dateMade: currentDate,
        })
        
      );
      router.push("/");
      console.log(productTotalAmtPurchased);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <Head>
        <title>Stock Management</title>
      </Head>
      <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
        {/* Column 1 - Menu */}
        <Menu />

        {/* Column 2 - AddArea */}
        <Flex
          w="85%"
          p="3%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
          background="#fff"
        >
          <Heading fontWeight="normal" mb={12} letterSpacing="tight">
            Add a new supplement
          </Heading>

          <FormControl>
            <FormLabel htmlFor="product-name">Name of supplement:</FormLabel>
            <Input
              id="product-name"
              placeholder="ex: Dr Danny's Dick Pills for Dudes' Dicks and Deep Dickin' "
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </FormControl>
          <br /> 
          <FormControl>
            <FormLabel htmlFor="total-amt">Total Amount Purchased:</FormLabel>
            <Input
              type="text"
              id="total-amt"
              placeholder="total number of pills/tablets/etc purchased"
              value={productTotalAmtPurchased}
              onChange={(e) => setProductTotalAmtPurchased(e.target.value)}
            />
          </FormControl>
          <br />

          <FormControl>
            <FormLabel htmlFor="product-price">Price:</FormLabel>
            <Input
              type="text"
              id="product-price"
              placeholder="Total Cost"
              value={productValue}
              onChange={(e) => setProductValue(e.target.value)}
            />
          </FormControl>
          <br />

          <Button
            mt={4}
            background="#000"
            color="#fff"
            _hover={false}
            type="submit"
            onClick={handleAddProduct}
          >
            Create new supplement entry
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
