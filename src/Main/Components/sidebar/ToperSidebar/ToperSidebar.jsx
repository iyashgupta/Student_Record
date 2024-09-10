import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";

const Topper = [
  {
    Topper_Name: "Alberto Francis",
    TopperAddress: "Paris , France",
  },
  {
    Topper_Name: "Michael Jordan",
    TopperAddress: "Bucharest, RO",
  },
  {
    Topper_Name: "Robert Almera",
    TopperAddress: "New York , US",
  },
];

const ToperSidebar = () => {
  return (
    <ul className="navbar-nav mb-md-1">
      <Accordion allowToggle defaultIndex={[0]}>
        <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <li>
                  <div className="nav-link text-xs font-semibold text-uppercase text-muted ls-wide">
                    Highest Marks
                    <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-5">
                      3
                    </span>
                  </div>
                </li>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            
          <AccordionPanel pb={4}>
            {Topper.map((ele) => (
              <li>
                <span className="nav-link d-flex align-items-center">
                  <div className="me-4">
                    <div className="position-relative d-inline-block text-white">
                      <Wrap>
                        <WrapItem>
                          <Avatar
                            name={ele.Topper_Name}
                          />
                        </WrapItem>
                      </Wrap>
                      <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                    </div>
                  </div>
                  <div>
                    <span className="d-block text-sm font-semibold">
                      {ele.Topper_Name}
                    </span>
                    <span className="d-block text-xs text-muted font-regular">
                      {ele.TopperAddress}
                    </span>
                  </div>
                  <div className="ms-auto">
                    <i className="bi bi-chat"></i>
                  </div>
                </span>
              </li>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </ul>
  );
};

export default ToperSidebar;
