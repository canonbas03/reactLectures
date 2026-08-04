export default function CoreConcept({ image, description, title }) {
  return (
    <li>
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

// type CoreConceptProps = {
// image: string;
// description: string;
// title: string;
// }
// export const CoreConcept: React.FC<CoreConceptProps> = ({ image, description, title }) =>{
//   return (
//     <li>
//       <img src={image} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }
