import { memo, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useRef } from 'react';
import styles from './Custom.module.css';
import cx from 'classnames';
import ButtonComponent from './components/Button';
import DropdownMenu from './components/DropdownMenu';


const App = () => {
  // const [user, setUser] = useState({name: 'Zsolt', age: 22});
  // let [count, setCount] = useState(() => 0);
  // const renders = useRef(0);

  // const handleButtonClick = (event) => {
  //   console.log(event);

  //   setUser(pUser => ({...pUser, age: 25}));

  //   // setCount(p => p+1);
  //   // count++;
  //   // onClick={() => setCount((count) => count + 1)}
  // }
  // useEffect(()=> {
  //   console.log('Mounted');

  //   return () => {
  //     console.log('Unounted 2');
  //   }
  // }, []);

  // useEffect(()=> {
  //   console.log(`Count: ${count}`)

  //   // Unmounted
  //   return () => {
  //     console.log('Unmounted');
  //   }
  // }, [count])


  // const foo = 'bar';
  // const n = 1;
  // const showTitle = true;
  // const name = 'Zsolt'
  // const title = (<h1>Hello there! My name is {name}</h1>)
  // const none = null;

  // function valami(){

  // }

  // const age = 20;

  // const renderMessage = () => {
  //   if(age >= 18){
  //     return (<h1>Beengedem</h1>)
  //   }

  //   if(age < 18){
  //     return (<h1>Nem engedem be</h1>)
  //   }
  // }

  // const [isRed, setIsRed] = useState(false)

  // const handleButtonClick = () => {
  //   setIsRed(prev => !prev);
  // }

  // const styleObject = {fontSize: '40px'}

const [currentValue, setCurrentValue] = useState('üres');

const options = [
  'red',
  'blue',
  'yellow'
];


  return (
    <div className="App">
      <DropdownMenu options={options} currentValue={currentValue} changeValue={setCurrentValue} />
      {/* <ButtonComponent title="Valami" /> */}
    </div>
  )
}

export default memo(App)


// <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card blue">
//         <button>
//           count is {count}
//         </button>
//         <p className={cx(styles.blue, {
//           [styles.red]: isRed
//         })} style={styleObject}>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//         <button onClick={handleButtonClick}>Change color</button>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//         <br/>
//         {/* {age >= 18 ? (<h1>beengedem {age}</h1>) : (<h1>nem</h1>)} */}
//       </p>
//       <h1>{renders.current}</h1>
//       <ButtonComponent title="EZ a props" disabled/>