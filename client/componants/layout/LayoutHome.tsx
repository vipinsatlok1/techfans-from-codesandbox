import { Logo } from '@/public/svgs'
import React from 'react'
import styles from "../../styles/componants/layout.module.css"
import { Button, Heading1, Paragraph1 } from '..'

const LayoutHome = () => {
    return (
        <div className={styles.layoutHomeWrapper}>
            <div className={styles.layoutHome}>
                <div className={styles.left}>
                    <div className={styles.wrapper}>
                        <Logo />
                        <div className={styles.title}>
                            <Heading1 text={"Heading"} />
                            <Paragraph1 text={"Hello I am Paragram"} />
                        </div>
                        <Button varient='card' text={"Lets Exprolor"} />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.wrapper}>
                        <div className={styles.cardWrapper}>
                            <div className={styles.icons}>
                                <Logo />
                                <Logo />
                            </div>
                            <div className={styles.card}>
                                <div className={styles.title}>
                                    <Heading1 text={"Heading"} />
                                    <Paragraph1 text={"paragraph"} />
                                </div>
                                <Button varient='card' Icon={Logo} text={"Button"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layoutHome"></div>
        </div>
    )
}

export default LayoutHome