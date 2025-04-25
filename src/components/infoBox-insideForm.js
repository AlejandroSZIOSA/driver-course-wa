export default function InfoBoxInsideForm({ children, colorText }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <p style={{ color: colorText }}>{children}</p>
    </div>
  );
}
