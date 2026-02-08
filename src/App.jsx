import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>AI-Powered Recipe Generator</h1>
          <p>Hello {user.username}!</p>
          <button onClick={signOut}>Sign out</button>
          {/* Your app content goes here */}
        </main>
      )}
    </Authenticator>
  );
}

export default App;