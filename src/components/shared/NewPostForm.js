import {Form, Button, Container} from 'react-bootstrap'

const ContentForm = (props) => {
    const {user, content, handleChange, handleSubmit, heading} = props
    console.log('User in Content Form: ', user)
    return (
        <Container className='justify-content-center'>
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='m-2'>
                    <Form.Label>Make a post:</Form.Label>
                    <Form.Control
                        placeholder="What's on your mind?"
                        name='material' 
                        id='content'
                        value={content.material}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className="m-2" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}
export default ContentForm