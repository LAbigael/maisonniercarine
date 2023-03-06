"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type props = {
  text: string;
  button: string;
};
const App = ({ text, button }: props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <div className="m-auto z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button text-gray-600"
          onClick={() => (modalOpen ? close() : open())}
        >
          {button}
        </motion.button>
      </div>
      <AnimatePresence
        initial={false}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal text={text} handleClose={close} />
        )}
      </AnimatePresence>
    </>
  );
};

interface BackdropProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Backdrop = ({ children, onClick }:BackdropProps) => {
  return (
    <motion.div
      onClick={onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

interface ModalProps {
  handleClose: () => void;
  text: string;
}
const Modal = ({ handleClose, text }:ModalProps) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="text-justify py-8 modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p className="text-md p-2 pt-6 lg:p-8 text-black" dangerouslySetInnerHTML={{ __html: text }} />
        <button onClick={handleClose}>Fermer</button>
      </motion.div>
    </Backdrop>
  );
};

export default App;
