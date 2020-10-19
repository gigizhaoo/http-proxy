function jwtVertification() {
  const cookie = window.document.cookie;
  console.log("jwtVertification -> cookie", cookie)
  return false;
}

module.exports = {
  vertify: jwtVertification,
};