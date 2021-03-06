import styled from 'styled-components';

const Container = styled.span`
  color: var(--color-text-primary);
`;

export default function Weight({ weight, bodyweight, unit }) {
  return (
    <Container>
      {bodyweight ? 'bw' : `${weight} ${unit}`}
    </Container>
  );
};
