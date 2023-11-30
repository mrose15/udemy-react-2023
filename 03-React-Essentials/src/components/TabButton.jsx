export default function TabButton({ children, onSelect }) {
  console.log("tab button component executing");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
