import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/material';
import Header from '../../components/Header';

export default function Faq() {
  return (
      <Stack sx={{display:'flex', flexDirection:'column', gap:2}}>
        <Header title="FAQ" subTitle={"Frequently Asked Questions"}/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">How can I add a new user?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Go to the Users section in the dashboard and click the "Add User" button. Fill in the details and save.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">How do I update my profile?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Click your profile picture in the top-right corner and select "Edit Profile" to update your information.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">How do I reset my password?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Navigate to Account Settings, select "Security", and click "Reset Password" to follow the steps.
        </AccordionDetails>
      </Accordion>
         <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography component="span">Is the dashboard mobile responsive?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Yes, the dashboard is fully responsive and works smoothly on desktop, tablet, and mobile devices.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography component="span">How can I generate a report?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Go to the Reports section, select the report type, apply filters if needed, and click "Generate".
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography component="span">Can I integrate third-party APIs?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Yes, go to Integrations in Settings and follow the guide to connect with third-party APIs.
        </AccordionDetails>
      </Accordion>
        </Stack>
  );
}
