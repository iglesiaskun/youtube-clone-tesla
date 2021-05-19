import styled from "styled-components";

export const Container = styled.body`
  .colored:nth-child(1) {
    background-image: url("image-one.jpg");
    //background-size: cover;
    background-size: 50%;
  }
  .colored:nth-child(2) {
    background-image: url("image-two.jpg");
    background-size: cover;
  }
  .colored:nth-child(3) {
    background-image: url("model-three.jpg");
    background-size: cover;
  }
  .colored:nth-child(4) {
    background-image: url("image-four.jpg");
    background-size: cover;
  }
  .colored:nth-child(5) {
    background-image: url("image-five.jpg");
    background-size: contain;
  }
  .colored:nth-child(6) {
    background-image: url("image-six.jpg");
    background-size: 34%;
  }
  .colored:nth-child(7) {
    background-image: url("image-seven.jpg");
    background-size: cover;
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #c2c2c2;
`;
