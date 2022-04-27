import styles from "./IhorPage.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteConst } from "../../common/RouteConst";
import { useEffect, useState } from "react";

const Counter = ({ decrease, increase, counter }) => {
    console.log('Counter')
  return (
    <div>
      <button onClick={decrease}> plus</button>
      <br />
      <br />
      <br />
      <button onClick={increase}> minus</button>
      {/*<p>Counter {counter}</p>*/}
    </div>
  );
};

const AnotherCounter = ({ divide, multiple, counter }) => {
  return (
    <div>
      <button onClick={divide}> divide</button>
      <br />
      <br />
      <button onClick={multiple}> multiple</button>
      <p>Counter {counter}</p>
    </div>
  );
};

const MainPage = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);

  const decrease = () => {
    setCounter((prevState) => prevState + 1);
  };
  const increase = () => {
    setCounter((prevState) => prevState - 1);
  };
  const divide = () => {
    setCounter((prevState) => prevState / 2);
  };
  const multiple = () => {
    setCounter((prevState) => prevState * 2);
  };

  return (
    <div className={styles.container}>
      <h1>Main page</h1>
      <Counter decrease={decrease} increase={increase} counter={counter} />
      <AnotherCounter divide={divide} multiple={multiple} counter={counter} />
      <Link to={RouteConst.IhorKurylov}>Go to Mentors page</Link>
      <br />
      <Link to={RouteConst.MARK}>Go to {RouteConst.MARK} page</Link>
      <br />
      <Link to={RouteConst.ANDRIANA_M}>Go to Andriana's page</Link>
      
      {/*//TODO set redirects to your Route*/}
      {/*<h1 onClick={()=> navigate(RouteConst.NOT_FOUND_PAGE)}>IhorPage</h1>*/}
      {/*<h1 onClick={()=> setCount((prevState) => ++prevState )}>IhorPage count {count}</h1>*/}
      {/*<h1 onClick={()=> setACount((prevState) => ++prevState )}>IhorPage Another aCount {aCount}</h1>*/}
    </div>
  );
};

export default MainPage;
