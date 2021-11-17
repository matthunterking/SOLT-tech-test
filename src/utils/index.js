import { bookingSubdomains } from '../environment';

const findUrlType = (see_tickets_url_infos, searchCriteria) => {
 return see_tickets_url_infos.find(({ url }) => url.includes(searchCriteria));
}


export const getBookingUrl = (see_tickets_url_infos = []) => {
 const tktsOnlineUrl = findUrlType(see_tickets_url_infos, bookingSubdomains.tktsOnline);
 const officialLondonTheatreUrl = findUrlType(see_tickets_url_infos, bookingSubdomains.officialLondonTheatre);

 return tktsOnlineUrl || officialLondonTheatreUrl || { url: null };
}
