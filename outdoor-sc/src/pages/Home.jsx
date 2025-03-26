import "./css/Home.css";
import Tree from "../components/Tree";
import Header from "../components/Header";
import Footer from "../components/Footer";
function App() {
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

export default App;
