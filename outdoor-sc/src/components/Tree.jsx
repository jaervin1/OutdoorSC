import "./css/Tree.css";

function Tree(props) {
  return (
    <section className="tree">
      <h3>Tree Name:{props.name}</h3>
      <p>Tree Description: {props.description}</p>
      <img src={props.image} alt="" />
    </section>
  );
}

export default Tree;