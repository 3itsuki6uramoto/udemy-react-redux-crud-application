function App() {
  const profiles = [
    {name:"Mitsuki",age:22},
    {name:"Ryusei",age:20},
    {name:"NoName"}
  ]
  return (
    <div>
    {
      profiles.map((profile, index) => {
        return(<User name={profile.name} age={profile.age} key={index}/>)

      })
    }
    </div>
  )
}

const User = (props) =>{
  return(
  <div>
  Hi, I am {props.name}, and {props.age} yaers old!
  </div>)
}

User.defaultProps = {
  age : 1
}

export default App;
