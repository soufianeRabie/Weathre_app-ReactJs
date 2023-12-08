import {Button, Form} from "react-bootstrap";
import styles from  "./SearchBar.module.scss"

export const SearchBar = () => {
    return (
        <>

              <Form>
                  <Form.Group className={`${styles.searchContainer}`}>
                      <Form.Control size={'lg'} type='text' placeholder='Enter you city ...'></Form.Control>
                      <Button size={'sm'} type="button" variant="primary">Search</Button>
                  </Form.Group>
              </Form>

        </>
    )
}