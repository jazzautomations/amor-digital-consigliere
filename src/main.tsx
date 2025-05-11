
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Main.tsx está carregando");
const rootElement = document.getElementById("root");

if (rootElement) {
  console.log("Elemento root encontrado, renderizando App");
  createRoot(rootElement).render(<App />);
} else {
  console.error("Elemento root não encontrado no DOM");
}
