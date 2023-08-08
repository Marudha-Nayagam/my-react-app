export function ColorBox({ color }) {
  const styles = {
    height: "25px",
    width: "175px",
    backgroundColor: color,
  };
  return (
    <div style={styles}></div>
  );
}
