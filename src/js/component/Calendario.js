import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';

import '../../styles/calendar.css';

export const Calendario = ({ value, onChange }) => {
  console.log(value);
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

Calendario.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};
