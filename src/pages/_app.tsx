import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'

// Esse arquivo é recalculado toda vez quando o usuário mudar de página
// Ele contém todos os componentes que estão presentes em toda a aplicação

function MyApp({ Component, pageProps }) {
  

  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
  
}

export default MyApp
