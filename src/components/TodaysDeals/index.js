import ShowCard from '../ShowCard';
import { Container, ShowsContainer } from './style';

const TodaysDeals = ({ showData }) => {
 return <Container>
  <h1>Today's deals</h1>
  <ShowsContainer>
   {showData.map(({ id, ...rest }) =>
    <ShowCard key={id} {...rest} />
   )}
  </ShowsContainer>
 </Container>;
};

export default TodaysDeals;
