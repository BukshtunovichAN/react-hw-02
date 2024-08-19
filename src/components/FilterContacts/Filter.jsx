import React from 'react';
import {StyledField, StyledLabel} from './filterStyled'

const Filter = ({ value, onChange }) => (
  <StyledLabel>
    Фильтр по имени
    <StyledField type="text" value={value} onChange={onChange} />
  </StyledLabel>

);

export default Filter;