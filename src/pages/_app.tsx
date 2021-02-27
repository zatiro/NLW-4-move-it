import '../styles/global.css'

// Esse arquivo é recalculado toda vez quando o usuário mudar de página
// Ele contém todos os componentes que estão presentes em toda a aplicação

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
  
}

export default MyApp
