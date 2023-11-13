import styles from './NoMatch.module.scss'
import {Link} from 'react-router-dom';
import animation404 from '../../images/404.gif'
const NoMatch = () => {
	return(
		<div className={styles.noMatch}>
			<div className={styles.animation404}>
				<h5 className={styles.title}>404</h5>
				<img src={animation404} alt="404 animation" />
				<div className={styles.bottom}>
					<p className={styles.text}>Wygląda na to że strona nie odpowiada,</p>
					<p className={styles.text}>strona, której szukasz jest niedostępna!</p>
					<Link className={styles.link} to="/">Wróć do strony głównej</Link>
				</div>
			</div>
		</div>
	)
}

export default NoMatch;