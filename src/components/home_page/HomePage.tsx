import styles from './HomePage.module.scss'
import Layout from '../Layout/Layout'

type IStar = {
    top: string | undefined,
    left: string | undefined,
    delay: string & {} | undefined,
}


const HomePage = () => {
    const starArray: Array<IStar> = []

    const randomPercent = (min = 0, max = 100) => {
        const randomInt = Math.floor(Math.random() * (max + 1))
        return `${randomInt}%`
    }

    const randomDelay = (interval = 3) => {
        const randomInteger = Math.random() * (interval + 1);
        return `${randomInteger}s`
    }

    const fillArray = () => {
        for (let i = 0; i <= 45; i++) {
            const obj = {
                top: randomPercent(),
                left: randomPercent(),
                delay: randomDelay()
            }
            starArray[i] = obj
        }
    }
    fillArray()
    return (

        <div className={styles.main}>
            <Layout>
                {starArray.map((item, index) => {
                    return (
                        <div key={index} className={styles.star} style={{ top: item.top, left: item.left, animationDelay: item.delay }}></div>
                    )
                })}
                <div className={styles.rocket_wrapper}>
                </div>
                <div className={styles.logos_wrapper}>

                </div>
            </Layout>
        </div>
    )
}

export default HomePage
