export const shortenAddress = (address) => {
    if (!address) {
      return ""; // or any default value you want to return
    }
    return `${address.slice(0, 5)}...${address.slice(-4)}`;
  };
  