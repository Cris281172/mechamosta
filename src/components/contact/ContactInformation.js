import styles from './ContactInformation.module.scss';
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const ContactInformation = ({homepage = false}) => {
	return(
		<div className={styles.container}>
			<div className={homepage ? `${styles.contactInformation} ${styles.home}` : styles.contactInformation}>
				{homepage &&
					<>
						<div className={styles.titleWrapper}>
							<h2 className={`${styles.title} ${styles.homepage}`}>Kontakt</h2>
						</div>
						<Link to="/kontakt" className={styles.contactLink}>Umów wizytę poprzez formularz</Link>
					</>
				}

				<span className={styles.or}>
					<p className={styles.text}>albo</p>
					<div className={styles.line} />
				</span>
				<div className={styles.content}>
					<div className={styles.titleWrapper}>
						{!homepage && <h3 className={styles.title}>Kontakt</h3>}
					</div>
					<ul className={styles.list}>
						<li className={styles.item}>
							<AiOutlinePhone className={styles.icon}  />
							<div className={styles.linkWrapper}>
								<p className={styles.text}>Numer telefonu: </p>
								<a href="tel:453454696" className={styles.link}>+48 453 454 696</a>
							</div>
						</li>
						<li className={styles.item}>
							<AiOutlineMail className={styles.icon}  />
							<div className={styles.linkWrapper}>
								<p className={styles.text}>Email: </p>
								<a href="mailto:mechamosta@gmail.com" className={styles.link}>mechamosta@gmail.com</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ContactInformation;