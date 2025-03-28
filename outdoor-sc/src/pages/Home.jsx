import "./css/Home.css";
import Tree from "../components/Tree";
function Home() {
  return (
    <>
      <section className="columns">
        <Tree 
        name="Live Oak"
        description="Doesn't lose it's leaves"
        image="images/live_oak.jpeg"/>
        <Tree
        name="Dogwood"
        description="Flower's in spring" 
        image="images/dogwood.jpeg"/>
      </section>
    </>
  );
}

export default Home;
