import styled from 'styled-components'

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`

export const Campo = styled.input`
  width: 98%;
  height: 40px;
  box-sizing: border-box;
  padding: 0 16px;
  outline-color: var(--cor-principal);
  margin-bottom: 16px;
  border-radius: 12px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

export const BtnPesquisar = styled.button`
  width: 100%;
  height: 40px;
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  padding: 0 16px;
  font-size: 18px;
  border-radius: 12px;
  color: var(--cor-secundaria);
  cursor: pointer;

  @media (max-width: 768px) {
    width: 98%;
  }
`
