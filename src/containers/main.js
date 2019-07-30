import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const ParticleMV = keyframes`
  10% {
    width: 10px;
    margin-left: 50%;
    opacity: 1;
  }
  30% {
    width: 50%;
    margin-left: 25%;
    opacity: 1;
  }
  100% {
    width: 100%;
    margin-left: 0;
    opacity: 0;
  }
`;

const ParticleBoxeMV = keyframes`
  10% {
    margin-top: -40%;
  }
  12% {
    margin-top: -42%;
  }
  100% {
    margin-top: 0;
  }
`;

const ParticleBox = styled.div`
  position: absolute;
  height: 10px;
  width: 500px;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: translate(-50%, -50%);
  animation: ${ParticleBoxeMV} 3s linear infinite;
  z-index: 50;
`;

const Particle = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  margin-left: 50%;
  animation: ${ParticleMV} 3s linear infinite;
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
  const [deg, setDeg] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    setTimeout(() => {
      setDeg(deg.map(() => Math.round(Math.random() * 360) - 180));
    }, 3000);
  });

  const random = num => {
    return Math.random() * num;
  };

  const makeParticle = num => {
    const particles = [];
    for (let i = 0; i < num; i++) {
      particles.push(
        <Particle
          key={"part" + i}
          style={{
            transform: `scale(${random(0.5) + 0.5}) rotate(${random(180)}deg)`,
            filter: `hue-rotate(${random(90)}deg) contrast(2)`
          }}
        />
      );
    }
    return particles;
  };

  return (
    <>
      <ParticleBox top={"90%"} left={"20%"}>
        {makeParticle(7)}
      </ParticleBox>
      <ParticleBox top={"90%"} left={"80%"}>
        {makeParticle(7)}
      </ParticleBox>
    </>
  );
}

export default Firework;
