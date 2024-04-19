import PropTypes from "prop-types";
// import Address from './Address';

Animals.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
};

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


Plants.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  amount: PropTypes.number,
  points: PropTypes.array,
  married: PropTypes.bool,
  address: PropTypes.shape({
    city: PropTypes.string,
    street: PropTypes.string,
  }),
  greet: PropTypes.func,
};



export function Plants({
  name,
  title,
  amount,
  points,
  married,
  address,
}) {
  return (
    <>
      <h1>Plants</h1>
      <h1>Name: {name}</h1>
      <ul>
        <li>Title: {title}</li>
        <li>Amount of Money: {amount}</li>
        <li>Marreid: {married ? "Married" : "Single"}</li>
        <li>Points: {points}</li>
      </ul>
      <h4>Address</h4>
      <ul>
        <li>City: {address.city}</li>
        <li>Street: {address.street}</li>
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
