import { getBookingUrl } from "../../utils";
import BookNowButton from '../BookNowButton';
import { Container, SoldOut, HeroImage, ShowTitle, ShowSubTitle } from './style';

const ShowCard = ({ title, see_tickets_url_infos, image, ...rest }) => {

  console.log(rest)

  const bookingUrl = getBookingUrl(see_tickets_url_infos).url;

  return (
    <Container>
      {!bookingUrl && <SoldOut />}
      <HeroImage src={image} isSoldOut={!bookingUrl} />
      <ShowTitle>{title}</ShowTitle>
      {bookingUrl && <ShowSubTitle>About The Show</ShowSubTitle>}
      <BookNowButton url={bookingUrl} />
    </Container>)
};

export default ShowCard;
