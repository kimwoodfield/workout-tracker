import styled from 'styled-components'

const PreviewWrap = styled.div`
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid lightgray;
    display: flex;
    align-items: center;
`

const DateWrap = styled.div`
    height: 100%;
    width: 25%;
    text-align: center;
    font-size: 0.85rem;
`

const WorkoutWrap = styled.div`
    height: 100%;
    width: 75%;
`

const Routine = styled.p`
    padding: 0.5rem 0 0.2rem 0;
    margin: 0;
    font-weight: bold;
`

const Exercises = styled.p`
    font-size: 0.85rem;
    padding: 0 0.5rem 0.75rem 0;
    margin: 0;
`

export default function PastWorkoutPreview(props) {
    return (
        <PreviewWrap>
            <DateWrap>{props.date}</DateWrap>
            <WorkoutWrap>
                <Routine>{props.RoutineName}</Routine>
                <Exercises>Barbell Overhead Press, Dumbell Lateral Raises</Exercises>
            </WorkoutWrap>
        </PreviewWrap>
    )
}