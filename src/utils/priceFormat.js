export default price => {
  const reg = /\./;
  price = reg.test(price) ? `${ price }€` : `${ price }.00€`;
  return price.replace(reg, ',');
};
