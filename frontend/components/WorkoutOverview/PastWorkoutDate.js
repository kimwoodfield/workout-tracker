import styled from 'styled-components'

const Wrapper = styled.div`
    height: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #ededed;
`
const WorkoutDate = styled.div`
    height: 100%;
    font-weight: bold;
    // border: 1px solid purple;
    padding: 0 1.25rem;
    margin: 0;
    display: flex;
    align-items: center;
`

const WorkoutQty = styled.div`
    height: 100%;
    // border: 1px solid green;
    padding: 0 1rem;
    margin: 0;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
`

export default function PastWorkoutDate(props) {
    return (
        <Wrapper>
            <WorkoutDate>{props.WorkoutDate}</WorkoutDate>
            <WorkoutQty>{props.WorkoutQty} Workouts</WorkoutQty>
        </Wrapper>
    )
}