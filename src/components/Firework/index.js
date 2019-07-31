import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const ParticleMV = keyframes`
70% {
  opacity: 1;
}  
100% {
    width: 100%;
    margin-left: 0;
    opacity: 0;
  }
`;

const ParticleBoxeMV = keyframes`
  to {
    margin-top: -20%;
  }
`;

const ParticleBox = styled.div`
  position: absolute;
  height: 10px;
  width: 500px;
  top: 100%;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: translate(-50%, -50%);
  animation: ${ParticleBoxeMV} 3s cubic-bezier(0, 5, 0.2, 3);
  z-index: 50;
`;

const Particle = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  margin-left: 50%;
  animation: ${ParticleMV} 3s cubic-bezier(0.25, 0, 0, 1);
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 6px;
    height: 6px;
    top: 0%;
    left: 0%;
    background: #ff90c3;
    border-radius: 100%;
    box-shadow: 0 0 6px #ff82bb, 0 0 20px #ff82bb;
    opacity: 1;
  }
  &::after {
    left: 100%;
  }
`;

function Firework() {
  const [amount, setAmount] = useState([0, 0]);
  const MAX_AMOUNT = 20;
  const COLOR_RANGE = 360;

  useEffect(() => {
    if (amount[0]) {
      setTimeout(() => {
        setAmount(amount.map(() => 0));
      }, 3000);
    } else {
      setTimeout(() => {
        setAmount(amount.map(() => Math.round(Math.random() * MAX_AMOUNT/2) + MAX_AMOUNT/2));
      }, 300);
    }
  });

  const random = num => {
    return Math.random() * num;
  };

  const makeParticle = (num, index) => {
    const particles = [];
    for (let i = 0; i < num; i++) {
      particles.push(
        <Particle
          key={"part" + i + index}
          style={{
            transform: `scale(${random(0.5) + 0.5}) rotate(${random(180)}deg)`,
            filter: `hue-rotate(${random(30)}deg) contrast(2)`
          }}
        />
      );
    }
    return particles;
  };

  return (
    <>
      {amount.map((item, index) => {
        return item ? (
          <ParticleBox
            key={`ParticleBox${index}`}
            left={50 * (random(1) + index) + "%"}
            style={{
              filter: `hue-rotate(${random(COLOR_RANGE)}deg) contrast(2)`
            }}
          >
            {makeParticle(item, index)}
          </ParticleBox>
        ) : null;
      })}
    </>
  );
}

export default Firework;
