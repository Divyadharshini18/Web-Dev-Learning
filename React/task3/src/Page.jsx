function Header(){
  return(
    <>
      <header>
        <img src="../react-logo.png" alt="React logo" width="40" />
      </header>
    </>
  )
}

function Main(){
  return(
    <>
      <main>
        <h1>React facts!</h1>
        <ol>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ol>
      </main>
    </>
  )
}

function Footer(){
  return(
    <>
      <footer>
        <span>© 20xx React development. All rights reserved.</span>
      </footer>
    </>
  )
}

function Page() { // Parent Component
  return (
    <div>
      <Header /> 
      <Main />
      <Footer />
    </div> // Child Component which are called inside Parent Component
  )
}

export default Page