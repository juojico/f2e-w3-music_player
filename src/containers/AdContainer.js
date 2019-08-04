import React from "react";
import styled from "styled-components";
import ad from "../media/image/party.jpg";
import close from "../media/slice/btn_close.svg";

const AdWrapper = styled.div`
  position: absolute;
  background: #222831f0;
  width: 100%;
  height: 100%;
  padding: 8px 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 100;
`;

const AdImg = styled.div`
  width: 275px;
  height: 371px;
  margin-top: 48px;
  background: url(${ad});
`;

const Btn = styled.div`
  padding: 10px 30px;
  background: #29dde0;
  border-radius: 20px;
  color: #393e46;
  font-size: 16px;
  margin-top: 60px;
  cursor: pointer;
`;

const BtnClose = styled.div`
  width: 42px;
  height: 42px;
  margin-top: 50px;
  background: url(${close});
  cursor: pointer;
`;

const AdContainer = props => {
  const { open, onClose } = props;
  return (
    <>
      {open ? (
        <AdWrapper>
          廣告
          <AdImg />
          <Btn>前往訂閱</Btn>
          <BtnClose onClick={onClose} />
        </AdWrapper>
      ) : null}
    </>
  );
};

export default AdContainer;
