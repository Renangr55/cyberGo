import missao from '../assets/missao.png';
import mapa from '../assets/localizacao.png';
import inventario from '../assets/inventario.png';
import camera from '../assets/Observador.png';
import { Link } from 'react-router-dom'
export function Menu() {
    return (
        <main className='menu'>
            <ul>
                <li>
                    <Link to = 'missao'>
                        <figure>
                            <img src={missao} alt="Missões" />
                        </figure>
                    </Link>
                </li>
                
                <li>
                    <Link to='inventario'>
                        <figure>
                            <img src={inventario} alt="Inventário" />
                        </figure>
                    </Link>
                </li>

                <li>
                    <figure>
                        <img src={mapa} alt="GeoLocalização" />
                    </figure>
                </li>

                <li>
                    <figure>
                        <img src={camera} alt="camera" />
                    </figure>
                    
                </li>
            </ul>
        </main>
    )
}