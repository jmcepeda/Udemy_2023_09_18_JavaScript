function Animals({ title, name = "Nombre-Usuarios" }) {
  console.log(title);
  return (
    <>
      <h1>
        {name} - Title: {title}
      </h1>
      <h2>Animals</h2>
      <ul>
        <li>Dog</li>
        <li>Cat</li>
        <li>Hamster</li>
      </ul>
    </>
  );
}

export function Plants(props) {
  return (
    <>
      <h1>Plants</h1>
      <h1>Name: {props.name}</h1>
      <ul>
        <li>Title: {props.title}</li>
        <li>Amount of Money: {props.amount}</li>
        <li>Marreid: {props.married ? "Married" : "Single"}</li>
        <li>Points: {props.points}</li>
      </ul>
      <h4>Address</h4>
      <ul>
        <li>City: {props.address.city}</li>
        <li>Street: {props.address.street}</li>
      </ul>
      <h2>Plants</h2>
      <ul>
        <li>Potato</li>
        <li>Carrot</li>
        <li>Cabbage</li>
      </ul>
    </>
  );
}

export default Animals;
