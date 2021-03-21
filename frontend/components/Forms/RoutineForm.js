import styled from 'styled-components'
import Input from './FormInput'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 18rem;
    padding-bottom: 1rem;
`

const Group = styled.div`
    padding: 0.5rem 0;
    margin: 0.5rem 0;
    // border: 1px dashed grey;
`

export default function Routine() {

    // Handles the form submission
    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

            fetch('http://localhost:3000/addroutine', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, fullname, username, password }),
              })
              .then((res) => {
                switch(res.status) {
                    case 400:
                        console.log('This is a 400 error.');
                        break;
                    case 429:
                        console.log('This is a 429 error. Rate limit exceeded');
                        break;
                    case 201:
                        res.json().then((data) => {
                            // request sent
                            alert('Your routine has been added.');
                            router.push('/routines');
                        })
              }})
    }

    return (
        <Form>
            <div>
            <label> Routine Name : </label>
            <Input
                type="text"
                placeholder="Routine name..."
                name="routine_name"
            />

            </div>

            <Group>
                <label> Exercise 1 : </label>
                <Input
                    type="text"
                    placeholder="Exercise name..."
                    name="exercise_name"
                />
                <select name="exercise_type" id="exercise_type" form="#">
                    <option selected="selected" disabled>Exercise Type</option>
                    <option value="Chest">Chest</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Back">Back</option>
                    <option value="Legs">Legs</option>
                    <option value="Arms">Arms</option>
                </select>
            </Group>

            <Group>
                <label> Exercise 2 : </label>
                <Input
                    type="text"
                    placeholder="Exercise name..."
                    name="exercise_name"
                />
                <select name="exercise_type" id="exercise_type" form="#">
                    <option selected="selected" disabled>Exercise Type</option>
                    <option value="Chest">Chest</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Back">Back</option>
                    <option value="Legs">Legs</option>
                    <option value="Arms">Arms</option>
                </select>
            </Group>

            <Group>
                <label> Exercise 3 : </label>
                <Input
                    type="text"
                    placeholder="Exercise name..."
                    name="exercise_name"
                />
                <select name="exercise_type" id="exercise_type" form="#">
                    <option selected="selected" disabled>Exercise Type</option>
                    <option value="Chest">Chest</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Back">Back</option>
                    <option value="Legs">Legs</option>
                    <option value="Arms">Arms</option>
                </select>
            </Group>

            <Group>
                <label> Exercise 4 : </label>
                <Input
                    type="text"
                    placeholder="Exercise name..."
                    name="exercise_name"
                />
                <select name="exercise_type" id="exercise_type" form="#">
                    <option selected="selected" disabled>Exercise Type</option>
                    <option value="Chest">Chest</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Back">Back</option>
                    <option value="Legs">Legs</option>
                    <option value="Arms">Arms</option>
                </select>
            </Group>

            <Group>
                <label> Exercise 5 : </label>
                <Input
                    type="text"
                    placeholder="Exercise name..."
                    name="exercise_name"
                />
                <select name="exercise_type" id="exercise_type" form="#">
                    <option selected="selected" disabled>Exercise Type</option>
                    <option value="Chest">Chest</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Back">Back</option>
                    <option value="Legs">Legs</option>
                    <option value="Arms">Arms</option>
                </select>
            </Group>


            <button>Add routine</button>
        </Form>
    )
}