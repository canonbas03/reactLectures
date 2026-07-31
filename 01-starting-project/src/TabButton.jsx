export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

// children is a special, built-in prop that allows a component to pass elements, text, or other components as data to another component.
