import {Form, Button, Container, Link} from 'react-bootstrap'

const ContentForm = (props) => {
    const {user, content, handleChange, handleSubmit, heading} = props
    console.log('User in Content Form: ', user)
    return (
        <Container className='justify-content-center'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='m-2'>
                    <Form.Control
                        placeholder={"What's on your mind?"}
                        name='material' 
                        id='content'
                        value={content.material}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Container className='d-flex justify-content-around'>
                    <Button className="m-2" type="submit">Submit</Button>
                </Container>
            </Form>
        </Container>
    )
}
export default ContentForm