import { useNavigate } from 'react-router-dom';


const HomePageComponent = () => {
    const navigator = useNavigate();

    function loginPageFunction(){
        navigator('/login-page')
      }
  return (
    <div>
      <h2 className='text-xl font-bold text-green-500'>TinyApps</h2>
      <button onClick={loginPageFunction}>LogIn</button>

    </div>
  )
}

export default HomePageComponent
