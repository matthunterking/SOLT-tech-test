# SOLT Junior Tech Test

## How to use

In the root directory run 
`yarn install`

To run the tests run
`yarn test` 

To view the site run
`yarn start` 
and open http://localhost:3000/ in the browser.

## Approach

The first decision I made was to use `axios` to handle my call to the API endpoint. The main reason I used this was to make it easier to handle any errors that could have come back from the API. 

Once I had got my API call set up I moved onto how I would extract a single link from the `see_tickets_url_infos` array to use on my "Book Now" button. I decided to move the logic for this into an `utils` folder. I did this to both keep my code clean but also because if this was used in a bigger site there would be potential for this function to be used in other places. Some of the shows didn't have `tktsonline.seetickets.com` or `officiallondontheatre.seetickets.com` but did have other links in the array. I made the assumption that for these shows I should treat them like the array was empty and therefore display them as sold out. 

Finally I moved onto styling where I decided to use `styled-components`. My reasoning behind this was again to keep my code clean and well organized.

Then just for fun I added a favicon and loading spinner.

## Time constraints 

I spent just over 3 hours over a couple of days on the task. I only tested my solution on Chrome, if I had more time available I would like to have ensured that I had good cross browser support and that I optimized the sites lighthouse score. I would have also liked to have written some more tests for my array function.
