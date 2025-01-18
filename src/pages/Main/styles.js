import styled from 'styled-components';

export const Container = styled.div`
  max-width: 43.75rem;
  background: #FFF;
  border-radius: .25rem;
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.2);

  padding: 1.875rem;
  margin: 5rem auto;

  h1 {
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      margin-right: .625rem;
    }
  }
`;

export const Form = styled.form`
  margin-top: 1.875rem;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: .0625rem solid #DDD;
    padding: .625rem .9375rem;
    border-radius: .25rem;
    font-size: 1.0625rem;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading
}))`
  background: #0D2636;
  border: 0;
  border-radius: .25rem;
  margin-left: .625rem;
  padding: 0 .9375rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled]{
    cursor: not-allowed;
    opacity: 0.5;
  }
`;