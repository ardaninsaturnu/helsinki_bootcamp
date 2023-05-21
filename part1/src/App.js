/*const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  const Header = (props) => {
    return <h1>{ props.title }</h1>
  }
  
  const Content = (props) => (
    <>
      {
        props.parts.map(({ name, exercises }, index ) => {
          return <p key={index}>{name} : { exercises }</p>
        })
      }
    </>
  );
  
  const Total = (parts) => <p>Number of exercises { parts.reduce( (sum, item) => sum + item.exercises, 0 )  }</p>
  
  return (
    <div>
      <Header title={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App;
*/

import React,{useState} from "react";
import Button from "./components/Button";
import Display from "./components/Display";

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)
  
  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
    console.log('increasing, value after', counter)
  }
  
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
    console.log('decreasing, value after', counter)
  
  }
  
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }
  
  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
      <Button handleClick={decreaseByOne} text="minus" />
    </div>
  )
}

export default App;
