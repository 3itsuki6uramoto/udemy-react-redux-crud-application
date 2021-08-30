import PropTypes from'prop-types';

function App() {
  const profiles = [
    {name:"Mitsuki",age:22},
    {name:"Ryusei",age:20},
    {name:"Kazuhisa",age:50}
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

User.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number.isRequired
}

export default App;
