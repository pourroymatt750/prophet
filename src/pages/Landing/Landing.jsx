import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Welcome to Prophet!</h1>
      <h2>A guide to the most commonly asked questions</h2>
      {user ? 
        ''
        :
        <>
        <h2>Please login or sign up to continue</h2>
          <Link to="/login">
            <button id='login' className="btn btn-primary">Login</button>
          </Link>
          <Link to="/signup">
            <button id='signup' className="btn btn-success">Sign Up</button>
          </Link>
        </>
      }
    </main>
  )
}

export default Landing
