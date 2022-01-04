try {
  const { total } = require(__dirname + "/../coverage/coverage-summary.json");
  const items = ["lines", "statements", "functions", "branches"];
  const listOut = [];
  items.forEach((key) => {
    const obj = total[key];
    const out = `${key.toUpperCase()}=${obj.pct || 0}`;
    listOut.push(out);
  });
    console.log(listOut.join('|'));
} catch (e) {
  console.error(e);
}
