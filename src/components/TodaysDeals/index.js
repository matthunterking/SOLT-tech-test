import ShowCard from '../ShowCard';
import { Container, ShowsContainer, Heading } from './style';

const TodaysDeals = ({ showData }) => {
 return <Container>
  <Heading>Today's deals</Heading>
  <ShowsContainer>
   {showData.map(({ id, ...rest }) =>
    <ShowCard key={id} {...rest} />
   )}
  </ShowsContainer>
 </Container>;
};

export default TodaysDeals;
