import React from 'react';
import styled from 'styled-components';
import { Col } from 'antd';

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

export const StyledDropzoneWrapper = styled(({ isActive, ...props }) =>
  React.createElement(Col, props),
)`
  width: 100%;
  ${({ isActive }) => (isActive ? styleActive : styleInactive)};
  & > div {
    width: 100% !important;
    height: inherit !important;
  }
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
