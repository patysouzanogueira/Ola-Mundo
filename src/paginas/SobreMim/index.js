import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"


export default function SobreMim() {
    return (
        <PostModelo
           fotoCapa={fotoCapa}
           titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Patrícia!
            </h3>

            <img
              src={fotoSobreMim}
              alt="Foto Patricia"
              className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi,tudo bem? Eu sou aluna de Front-end na Alura e estou  feliz em te ver por aqui.
            </p>

            <p className={styles.paragrafo}>
                Minha história com programação começou quando sair do trabalho anterior, pelo fato de não achar uma babá para cuidar dos meus filhos. 
            </p>

            <p className={styles.paragrafo}>
                Sem trabalho e com tempo disponível começei a fazer cursos básicos de programação indicado pela minha irmã, fui fazendo e cada vez se interessando mais pelo mundo web.
            </p>

            <p className={styles.paragrafo}>
             Então fiz minha inscrição na Alura e estou aprendendo muito,,participei de challengs fazendo projetos que jamais imaginei que conseguiria.

             Os colaboradore/instrutores são maravilhosos, a dinâmica de ensino nota 10.

            Desde então, tem sido  aprendizados atrás de aprendizados. Hoje sou muito feliz de ter a oportunidade de aprender diversos conteúdos ricos e encantadores. Espero muito por oportunidade no mercado de trabalho.
            </p>
        </PostModelo>
    )
}