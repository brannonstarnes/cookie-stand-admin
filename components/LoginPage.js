export default function LoginPage(onLogin) {
  function handleSubmit(e) {
    e.preventDefault();
    onLogin(e.target.username.value, e.target.password.value);
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <fieldset>
        <legend>Login</legend>

        <label htmlFor="username">Username:</label>
        <input type="text" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="text" name="password" />

        <button>Sign In</button>
      </fieldset>
    </form>
  );
}
