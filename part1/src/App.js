const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  const parts = [ part1, part2, part3 ]
  
  const Header = (props) => {
    return <h1>{ props.title }</h1>
  }
  
  console.log( parts )
  const Content = () => (
    <>
      {
        parts.map(({ name, exercises }, index ) => {
          return <p key={index}>{name} : { exercises }</p>
        })
      }
    </>
  );
  
  const Total = () => <p>Number of exercises { parts.reduce( (sum, item) => sum + item.exercises, 0 )  }</p>
  
  return (
    <div>
      <Header title={course}/>
      <Content/>
      <Total/>
    </div>
  )
}

export default App;
