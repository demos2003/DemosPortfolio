import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div style={{ width: 500, position:"relative", top:-19 }}>
      <p>Mini & Side Projects</p>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{height:60}}
        >
          <Typography>Automated Payroll System</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ lineHeight: 0.4 }}>
            <p>Description : Automated Payroll Syatem based on </p>
            <p>Staff attendance and Location.</p>
            <p>Stack: #React JS, #BootStrapp, #CSS, #Node Js </p>
            <p>GitHub Link: Opeifa.olutoyin@premierfeedsltd.com</p>
            <p>Duration: 3 weeks</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{height:60}}
        >
          <Typography>MegaCare Drycleaning Site</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ lineHeight: 0.4 }}>
            <p>Description : A Display site for a Drycleaning Business</p>
            <p>Stack: #HTML, #PHP, #CSS, #BootStarp </p>
            <p>GitHub Link: Opeifa.olutoyin@premierfeedsltd.com</p>
            <p>Duration: 1 weeks</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{height:60}}
        >
          <Typography>Ibeji Foundation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ lineHeight: 0.4 }}>
            <p>Description : A charity foundation site built to  </p>
            <p>show charity works and receive requests</p>
            <p>Stack: #React JS, #BootStrapp, #CSS, #Node Js </p>
            <p>GitHub Link: Opeifa.olutoyin@premierfeedsltd.com</p>
            <p>Duration: 3 weeks</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{height:60}}
        >
          <Typography>Event Booking and Scheduling System</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ lineHeight: 0.4 }}>
            <p>Description : A booking and scheduling system for  </p>
            <p>events centres in Babcock University</p>
            <p>Stack: #React JS, #BootStrapp, #CSS, #Node Js </p>
            <p>GitHub Link: Opeifa.olutoyin@premierfeedsltd.com</p>
            <p>Duration: 4 weeks</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        style={{height:60}}
        >
          <Typography>Instagram Clone</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ lineHeight: 0.4 }}>
            <p>Description : An Instagram clone built using react native with posting </p>
            <p>updating, and viewing post capabitilies.</p>
            <p>Stack: #React Native, #Firebase </p>
            <p>GitHub Link: Opeifa.olutoyin@premierfeedsltd.com</p>
            <p>Duration: 2 months</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{height:60}}
        >
          <Typography>Automated Payroll System</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ lineHeight: 0.4 }}>
            <p>Description : Automated Payroll Syatem based on </p>
            <p>Staff attendance and Location.</p>
            <p>Stack: #React JS, #BootStrapp, #CSS, #Node Js </p>
            <p>GitHub Link: Opeifa.olutoyin@premierfeedsltd.com</p>
            <p>Duration: 3 weeks</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{height:60}}
        >
          <Typography>Automated Payroll System</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ lineHeight: 0.4 }}>
            <p>Description : Automated Payroll Syatem based on </p>
            <p>Staff attendance and Location.</p>
            <p>Stack: #React JS, #BootStrapp, #CSS, #Node Js </p>
            <p>GitHub Link: Opeifa.olutoyin@premierfeedsltd.com</p>
            <p>Duration: 3 weeks</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
       */}
          </div>
  );
}
