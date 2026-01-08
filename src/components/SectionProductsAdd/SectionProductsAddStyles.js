import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  p {
    margin: 0;
  }
  .linea {
    width: 2px;
    height: 100%;
    flex-shrink: 0;
    background-color: #1d3e32;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    order:3;
    .linea {
      display: none;
    }
    
  }
`;

export const SaucesWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  div {
    display: flex;
    justify-content: space-evenly;
  }
  p {
    font-size: 2rem;
    font-weight: 800;
    color: #64748b;
  }
  @media (max-width: 500px) {
    width: 100%;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

/* CHECKBOX / RADIO */
export const CheckboxWrapper = styled.div`
  position: relative;
  input {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
  }

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    color: #314158;
    user-select: none;
  }

  label::before {
    content: "";
    width: 10px;
    height: 10px;
    margin-right: 8px;
    border-radius: 4px;
    background-color: #e2e8f0;
    border: 1px solid #cad5e2;
    transition: all 0.15s ease;
  }

  input:checked + label::before {
    background-color: #1d3e32;
    border-color: #1d3e32;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='white' d='M15.854 3.146l-1.5-1.5a.5.5 0 0 0-.708 0L5.5 9.793 2.354 6.647a.5.5 0 0 0-.708 0l-1.5 1.5a.5.5 0 0 0 0 .708l5 5a.5.5 0 0 0 .708 0l10-10a.5.5 0 0 0 0-.708z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
  @media (max-width: 500px) {
    label {
      min-width: 200px;
    }
  }
`;

export const SectionBonusProductStyles = styled.section`
  label {
    display: flex;
    width: 100%;
  }
  label span {
    margin-left: auto;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;
