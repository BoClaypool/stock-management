export const useMask = () => ({
  toUSD: (value) => {
    const formattedNumber = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

    return formattedNumber;
  },
});
