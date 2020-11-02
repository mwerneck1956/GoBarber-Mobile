import React, { useCallback, useContext } from "react";
import { useTransition } from "react-spring";

import { Container } from "./styles";
import Toast from "./Toast";
import { ToastMessage, useToast } from "../../hooks/ToastContext";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (messages) => messages.id,
    {
      from : {right : '-120%' , opacity : 0},
      enter : {right : '0%' , opacity : 1},
      leave : {right : '-120%' , opacity : 0}
    }
  );

  return (
    <Container>
      {messagesWithTransitions.map(({item,key,props}) => {
        return <Toast key= {key} message={item} style={props} />;
      })}
    </Container>
  );
};

export default ToastContainer;
