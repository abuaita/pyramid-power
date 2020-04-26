import styles from './common.module.css'

export default function Common({ children }) {
  return <div className={styles.container}>{children}</div>
}