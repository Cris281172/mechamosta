import styles from './WhyUs.module.scss'
import { TbHomeCog } from "react-icons/tb";
import { AiFillThunderbolt, AiFillCar } from "react-icons/ai";
const WhyUs = () => {
    const Benefit = ({title, desc, icon}) => {
        return(
            <div className={styles.benefit}>
                <div className={styles.titleWrapper}>
                    {icon}
                    <h3 className={styles.title}>{title}</h3>
                </div>
                <p className={styles.description}>{desc}</p>
            </div>
        )
    }

    const Benefits = () => {
        return(
            <div className={styles.benefits}>
                <Benefit title="Dojazd na miejsce" desc="Gwarantujemy wygodę i oszczędność czasu, ponieważ dojeżdżamy do klienta w wyjątkowo dogodnych warunkach. Nasza cena za dojazd to jedynie 2zł za każdy kilometr, licząc od adresu Armii Krajowej 44, co sprawia, że podróż z nami jest nie tylko komfortowa, ale również przystępna cenowo." icon={<TbHomeCog className={styles.icon} />} />
                <Benefit title="Szybkość działania" desc="Jesteśmy przekonani, że czas to pieniądz, dlatego nie trać ani jednej chwili na zwlekanie. Nasza ekipa działa sprawnie, ale jednocześnie nie rezygnujemy z dokładności i jakości wykonywanych usług. Dzięki temu, możesz być pewien, że prace zostaną wykonane solidnie i bezbłędnie." icon={<AiFillThunderbolt className={styles.icon} />} />
                <Benefit title="Samochody to pasja" desc="Dla nas nie ma nic bardziej satysfakcjonującego niż widok uśmiechniętego klienta, który wsiada bezpiecznie do swojego ukochanego i perfekcyjnie naprawionego samochodu. Jako pasjonaci motoryzacji, wkładamy całe serce w to, co robimy." icon={<AiFillCar className={styles.icon} />} />
            </div>
        )
    }

    return(
        <div className={styles.whyUs}>
            <div className={styles.container}>
                <div className={styles.whyUsTitleWrapper}>
                    <h2 className={styles.whyUsTitle}>Dlaczego My?</h2>
                </div>
                <Benefits/>
            </div>
        </div>
    )
}

export default WhyUs;