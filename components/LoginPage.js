export default function LoginPage({onLogin}) {

    async function handleSubmit(e) {
      e.preventDefault();
      onLogin(e.target.username.value, e.target.password.value);
    }
 
    return (
      <form className="text-center items-center w-screen" onSubmit={handleSubmit} autoComplete="off">
        
          <h2 className="font-bold" htmlFor="username">USERNAME</h2>
          <input className="w-2/3 " type="text" placeholder="Username" name="username" />

          <h2 className="font-bold" htmlFor="password">PASSWORD</h2>
          <input className="w-2/3" type="text" placeholder="Password" name="password" />

          <h2><button className="bg-green-700 w-2/3 mt-4 h-10 font-bold">SIGN IN</button></h2>
        
      </form>
    );
  }
