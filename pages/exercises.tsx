import Head from "next/head";
import IconNavBar from "../components/Navigation/IconNavBar";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Spinner from "../components/Common/Spinner";
import { useAlert } from "react-alert";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AddButton } from '../components/Common/AddButton';
import { Modal } from '../components/Common/Modal'
import { ItemActions } from '../components/Common/ItemActions'
import * as workoutTrackerApi from '../api/index';

interface Exercise {
  id: number;
  exercise_name: string;
  exercise_type: string;
}

const useStyles = makeStyles({
  remove: {
    display: "flex",
    justifyContent: "center",
    fontSize: 22,
  },
  header: {
    display: 'flex !important', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: '14px 14px 7px 14px'
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '75vh',
  }
});

export default function Exercises() {
  const router = useRouter();
  const alert = useAlert();
  const classes = useStyles();

  const [exercises, setExercises] = useState([]);
  const [spinLoading, setSpinLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentExerciseId, setCurrentExerciseId] = useState<null | number>(null);

  const genericErrorMessage = "Oops, something went wrong!";

  const modalClosingHandler = () => {
    setShowModal(false);
  }

  const adminCheckHandler = async () => {
    try {
      const response = await workoutTrackerApi.checkAdminStatus();
      handleRequestErrors(response);
      response?.status === 200 ? setIsAdmin(true) : setIsAdmin(false);
    } catch (e) {
      console.log(e);
    }
  };

  const getExercisesHandler = async () => {
    setSpinLoading(true);
    try {
      const response = await workoutTrackerApi.getExercises();
      handleRequestErrors(response);
      const data = await response?.json();
      const { exercisesResults } = data;
      setSpinLoading(false);
      setExercises(exercisesResults);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setSpinLoading(false);
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    getExercisesHandler();
    adminCheckHandler();
  }, []);

  useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]);

  const handleRequestErrors = (response: Response | undefined) => {
    if (!response || !response.ok) {
      throw new Error(genericErrorMessage);
    }
  }

  const removeExerciseHandler = async () => {
    if (!currentExerciseId) return;
    try {
      const response = await workoutTrackerApi.removeExercise(currentExerciseId);
      handleRequestErrors(response);
      alert.show("Exercise deleted!");
      getExercisesHandler();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  const showModalHandler = (exerciseId: number) => {
    setCurrentExerciseId(exerciseId);
    setShowModal(true);
  };


  return (
    <React.Fragment>
      <Head>
        <title>Exercises</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container> 
        <Box className={classes.header} >
          <Typography variant='h4'>Exercises</Typography>
          {isAdmin && <AddButton route='addexercise' fontSize='32px' />}
        </Box>
      </Container>

      <Container style={{ paddingBottom: 90 }}>
        {exercises && exercises.length && !spinLoading ? (
          <List>
            {exercises.map((exercise: Exercise) => {
              const { id, exercise_name } = exercise;
              return (
                <React.Fragment key={id}>
                  <ListItem>
                    <ListItemText>{exercise_name}</ListItemText>
                    {isAdmin && (
                      <ListItemIcon
                        className={classes.remove}
                      >
                          <ItemActions onModalOpen={showModalHandler} exerciseId={id} />
                      </ListItemIcon>
                    )}
                  </ListItem>
                  <Divider />
                </React.Fragment>
              );
            })}
          </List>
        ) : (
          <Container>
            <Box className={classes.spinner}>
              <Spinner loading={true} />
            </Box>
          </Container>
        )}
        {showModal && <Modal intention='remove' onModalClose={modalClosingHandler} onRemoveExercise={removeExerciseHandler} />}
      </Container>

      <IconNavBar />
    </React.Fragment>
  );
}
