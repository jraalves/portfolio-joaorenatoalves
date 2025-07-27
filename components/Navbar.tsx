// Ficheiro: components/Navbar.tsx
import { Link } from 'react-scroll'; // Importa o Link da biblioteca que instalámos

const Navbar = () => {
  const navLinks = ['Sobre', 'Habilidades', 'Experiência', 'Certificações', 'Contato'];

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <Link to="inicio" smooth={true} duration={500} spy={true} style={{cursor: 'pointer'}}>
            João Renato Alves
          </Link>
        </div>
        <ul style={styles.navList}>
          {navLinks.map(link => (
            <li key={link} style={styles.navItem}>
              <Link
                activeClass="active" // Classe para quando o link está ativo
                to={link.toLowerCase()} // O 'to' deve corresponder ao 'id' da seção
                spy={true} // Faz o link "espiar" a posição do scroll
                smooth={true} // Ativa o scroll suave
                duration={500} // Duração da animação em ms
                offset={-70} // Ajuste para o menu não cobrir o título da seção
                style={{cursor: 'pointer'}}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Estilos para o Navbar (depois podemos mover para um ficheiro CSS)
const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    backgroundColor: '#1a1a1a',
    borderBottom: '1px solid #333',
    position: 'fixed', // Deixa o menu fixo no topo
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000, // Garante que o menu fica por cima de tudo
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
  },
  logo: {
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '25px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    color: '#e0e0e0',
    fontWeight: 500,
    transition: 'color 0.3s ease',
  }
};

// Estilo para o link ativo (será adicionado ao CSS global)
// .active { color: #0070f3 !important; }

export default Navbar;
