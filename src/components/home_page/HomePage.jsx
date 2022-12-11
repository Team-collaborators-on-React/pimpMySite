import styles from './HomePage.module.scss'
import Layout from '../Layout/Layout'
import {useEffect, useState} from 'react'




const HomePage = () => {
    const starArray = []
    const [count, setCount] = useState(1)

    const randomPercent = (min = 0, max = 100) => {
        const randomInt = Math.floor(Math.random() * (max + 1))
        return `${randomInt}%`
    }

    const randomDelay = (interval = 3) => {
        const randomInteger = Math.random() * (interval + 1);
        return `${randomInteger}s`
    }

    const fillArray = () =>{
        for (let i = 0; i <= 45; i++) {
            const obj = {
                top: randomPercent(),
                left: randomPercent(),
                delay: randomDelay()
            }
            starArray[i] = obj
        }
        starArray.map(item=> {
            item = ''
        })
        setTimeout(()=> {
            fillArray()
        }, 5000)
        console.log(starArray);
    }
    fillArray()
    return (
            <div className={styles.main}>
                { starArray.map((item, index) => {
                    return (
                        <div key={index} className={styles.star} style={{ top: item.top, left: item.left, animationDelay: item.delay }}></div>
                    )
                })}

            
                <Layout>
                    <div className={styles.rocket_wrapper}>
                    </div>
                    <div className={styles.logos_wrapper}>
                        
                    </div>
                </Layout>
            </div>

    )
}

export default HomePage
