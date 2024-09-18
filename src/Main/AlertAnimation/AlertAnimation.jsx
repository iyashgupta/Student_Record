import React from "react";
import { motion } from "framer-motion";
import { Alert, AlertIcon } from "@chakra-ui/react";

const AlertAnimation = ({ status, message }) => {
  console.log(status,message,'yash')
  if (!status || !message) {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Alert
        status={status}
        variant="left-accent"
        p={1}
        fontSize="sm"
        style={{ borderRadius: "5px" }}
      >
        <AlertIcon />
        {message}
      </Alert>
    </motion.div>
  );
};

export default AlertAnimation;
