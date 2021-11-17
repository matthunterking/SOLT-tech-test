import { getBookingUrl } from '.';
import TestData from './testData';


describe('getBookingUrl', () => {

 it('should return null when not given any arguments', () => {
  expect(getBookingUrl()).toEqual(null);
 });

 it('should return a tktsOnlineUrl when a tktsOnlineUrl is included in the array', () => {
  const { see_tickets_url_infos, expected } = TestData.tktsOnline;

  expect(getBookingUrl(see_tickets_url_infos).url).toEqual(expected);
 });


 it('should return a officiallondontheatre when a officiallondontheatreUrl is included and there is no tktsOnlineUrl', () => {
  const { see_tickets_url_infos, expected } = TestData.officiallondontheatre;

  expect(getBookingUrl(see_tickets_url_infos).url).toEqual(expected);
 });

 it('should return a tktsOnlineUrl when both a officiallondontheatreUrl and tktsOnlineUrl are included', () => {
  const { see_tickets_url_infos, expected } = TestData.mixed;

  expect(getBookingUrl(see_tickets_url_infos).url).toEqual(expected);
 });

 it('should return a null when both a officiallondontheatreUrl and tktsOnlineUrl are not included', () => {
  const { see_tickets_url_infos, expected } = TestData.noValidUrl;

  expect(getBookingUrl(see_tickets_url_infos)).toEqual(expected);
 });
});
