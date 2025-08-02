import React from "react";

interface GreetingModalProps {
  onClick: () => void;
}

const GreetingModal = ({ onClick }: GreetingModalProps) => {
  return (
    <div onClick={onClick}>
      <h1></h1>
    </div>
  );
};

export default GreetingModal;
