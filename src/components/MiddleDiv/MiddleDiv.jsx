import styles from './MiddleDiv.module.css';

const MiddleDiv = () => {

    return (
        <div className={styles.midDiv_container}>
            <div className={styles.mid_container}>
                <div className={styles.left_div}>
                    <img style={{ width: "700px", height: "550px" }} src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                </div>

                <div className={styles.right_div}>
                    <div className={styles.right_div_child}>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                        <button>Get in Touch</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MiddleDiv;