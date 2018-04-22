import Dropzone from 'react-dropzone';
import styled from 'styled-components';

const styleActive = `
  background: #47D787;
  opacity:1;
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`;

const styleInactive = `
  position: fixed;
  display: none;
  width:100%;
  height: 100%;
  top:0;
  left:0;
`;

export const StyledDropzone = styled(Dropzone)`
  width: 100%;
  ${({ isActive }) => (isActive ? styleActive : styleInactive)};
`;

export const StyledDropzoneCategory = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 100px;

  .dropzone-category__hover {
    background: orange;
  }
  > div {
    height: 50%;
  }
`;
