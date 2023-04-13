const App = () => {
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
