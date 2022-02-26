export interface ModalProps {
  intention: string;
  showModal?: boolean;
  onModalClose: () => void;
  onRemoveExercise?: () => void;
}

export enum IntentionsEnum {
    Remove = 'remove' 
}
