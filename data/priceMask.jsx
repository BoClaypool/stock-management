import createNumberMask from "text-mask-addons/dist/createNumberMask";

const priceMask = createNumberMask({
  prefix: "$",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ".",
  allowDecimal: true,
  decimalSymbol: ",",
});

export default priceMask;
