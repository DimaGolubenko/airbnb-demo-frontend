import styled from 'styled-components';
import check from '../check.svg';

export const Types = styled.form`
  padding-top: 0.5rem;
  padding-bottom: 0;
`;

export const Type = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Data = styled.div`
  color: #383838;
  margin-right: 2rem;
  font-family: 'CircularAirLight', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

export const Checkbox = styled.label`
  align-self: flex-start;
  width: 1.5rem;
  height: 1.5rem;
  box-sizing: border-box;
  background-color: ${props => (props.checked ? '#008489' : 'none')};
  background-image: ${props => (props.checked ? `url(${check})` : 'none')};
  background-position: center center;
  background-repeat: no-repeat;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 0.25rem;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  margin-right: 0.75rem;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.25rem;
  margin: 0;
  margin-bottom: 0.25rem;
  padding-top: 0.25rem;
`;

export const Description = styled.p`
  width: 196px;
  font-size: 0.75rem;
  line-height: 0.9rem;
  margin: 0;
`;

export const Icon = styled.img`
  height: 2rem;
`;
