// pages/_app.js
import '@/styles/header.css';  // Ruta correcta al archivo de estilo global

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
