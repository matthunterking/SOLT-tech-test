import { Button, DisabledButton } from "./style";

const BookNowButton = ({ url = null }) => {
 if (!url) return <DisabledButton>SOLD OUT</DisabledButton>;
 return <Button href={url} target='_blank'>Book Now</Button>
};

export default BookNowButton;
