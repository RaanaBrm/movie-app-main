import styles from "./container.module.css"

function Wrapper({ children, className = "" }) {
    return (
        <div className={`${styles.container} ${className}`}>
            {children}
        </div>
    )
}

export default Wrapper