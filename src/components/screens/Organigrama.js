import React from "react";
import logo3 from "../img/estruc.jpg";
import { Tree, TreeNode } from "react-organizational-chart";
import styled, { keyframes } from "styled-components";
import "../styles/organigrama.css";
import { Footer } from "./Footer";
const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
  margin-top: 10px;
`;

const slideAnim = keyframes`
  100% {
    top: 20px;
    left: 30px;
  }

  @media (max-width: 800px) {
    top: 70px;
    left: 50px;
    }

`;
export const Organigrama = () => {
  return (
    <>
      <div className="separator">
        <div className="line"> </div>
        <h2>Organigrama</h2>

        <div className="line"></div>
      </div>
      <div className="logo3">
        <img className="logo3" src={logo3} logo={logo3}></img>
      </div>

      {/**** ORGANIGRAMA ****/}
      <div className="organ">
        <Tree
          lineWidth={"2px"}
          lineColor={"green"}
          lineBorderRadius={"10px"}
          label={<StyledNode>Congreso Nacional</StyledNode>}
        >
          <TreeNode label={<StyledNode>Dirección Nacional </StyledNode>}>
            <TreeNode label={<StyledNode>Presidencia</StyledNode>} />
            <TreeNode
              label={<StyledNode>Comité Ejecutivo Nacional </StyledNode>}
            />
          </TreeNode>
          <TreeNode
            label={<StyledNode>Dirección Ejecutiva Nacional</StyledNode>}
          >
            <TreeNode label={<StyledNode></StyledNode>}>
              <TreeNode label={<StyledNode></StyledNode>} />
              <TreeNode label={<StyledNode></StyledNode>} />
            </TreeNode>
          </TreeNode>

          <TreeNode label={<StyledNode>Secretaría General </StyledNode>}>
            <TreeNode label={<StyledNode></StyledNode>} />
            <TreeNode label={<StyledNode></StyledNode>} />
          </TreeNode>
        </Tree>
      </div>
      <Footer />
    </>
  );
};
