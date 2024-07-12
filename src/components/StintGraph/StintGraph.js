import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import getStyles from './StintGraph.styles';
import TyresCircle from '../TyresCircle';

const styles = getStyles();

const StintGraph = (props) => {
  const { sessionStint, totalLaps } = props;
  const { compound, lap_start, lap_end, stint_number, tyre_age_at_start } =
    sessionStint;
  let stintColor;
  const currentStintLaps = lap_end - lap_start + 1;
  const currentStintPercentage = (100 * currentStintLaps) / totalLaps;

  if (compound === 'SOFT') {
    stintColor = styles.softCompoundColor;
  } else if (compound === 'MEDIUM') {
    stintColor = styles.mediumCompoundColor;
  } else if (compound === 'HARD') {
    stintColor = styles.hardCompoundColor;
  } else if (compound === 'INTERMEDIATE') {
    stintColor = styles.intermediateCompoundColor;
  } else if (compound === 'WET') {
    stintColor = styles.wetCompoundColor;
  }

  return (
    <Tooltip
      title={
        <Box>
          <Typography>Stint №: {stint_number}</Typography>

          <Typography>Compound: {compound}</Typography>

          <Typography>Lap start: {lap_start}</Typography>

          <Typography>Lap end: {lap_end}</Typography>

          <Typography>Tyre age at start: {tyre_age_at_start}</Typography>
        </Box>
      }
      placement="top"
      arrow
      enterTouchDelay={0}
      leaveTouchDelay={5000}
    >
      <Box sx={{ ...styles.container, width: `${currentStintPercentage}%` }}>
        <Box sx={styles.tyreCircle}>
          <TyresCircle compound={compound} size="26" />
        </Box>

        <Box sx={{ ...styles.line, backgroundColor: stintColor }} />

        <Box sx={{ ...styles.lapsCircle, backgroundColor: stintColor }}>
          {currentStintLaps}
        </Box>
      </Box>
    </Tooltip>
  );
};

export default StintGraph;