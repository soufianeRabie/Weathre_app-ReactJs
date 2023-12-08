import {Button, Card, CardText, CardTitle} from "react-bootstrap";
import styles from "./Weather.module.scss"

export const Weather = () => {
    return (
        <>

            <Card  className={`${styles.container}`}>
                <Card.Body className=''>
                    <CardTitle>
                        Casablanca , Ma
                    </CardTitle>
                    <CardText as={'div'}>
                        <div>image </div>
                        <div>15° C </div>
                        <div> Last update 10H15Min</div>
                    </CardText>
                </Card.Body>
            </Card>
        </>
    )
}