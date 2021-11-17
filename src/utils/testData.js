const TestData = {
  tktsOnline: {
    see_tickets_url_infos: [
      {
        hash: "414bd24c3a76c30321f6ae2b2283e54f",
        url: "https://tktsonline.seetickets.com/av/tour/wicked/327",
        url_type: "tkts-online"
      }
    ],
    expected: "https://tktsonline.seetickets.com/av/tour/wicked/327"
  },
  officiallondontheatre: {
    see_tickets_url_infos: [
      {
        hash: "414bd24c3a76c30321f6ae2b2283e54f",
        url: "https://officiallondontheatre.seetickets.com/av/tour/wicked/280",
        url_type: "olt"
      }
    ],
    expected: "https://officiallondontheatre.seetickets.com/av/tour/wicked/280"
  },
  mixed: {
    see_tickets_url_infos: [
      {
        hash: "414bd24c3a76c30321f6ae2b2283e54f",
        url: "https://officiallondontheatre.seetickets.com/av/tour/wicked/280",
        url_type: "olt"
      },
      {
        hash: "414bd24c3a76c30321f6ae2b2283e54f",
        url: "https://tktsonline.seetickets.com/av/tour/wicked/327",
        url_type: "tkts-online"
      }
    ],
    expected: "https://tktsonline.seetickets.com/av/tour/wicked/327"
  },
  noValidUrl: {
    see_tickets_url_infos: [
      {
        hash: "414bd24c3a76c30321f6ae2b2283e54f",
        url: "https://something.seetickets.com/av/tour/wicked/280",
        url_type: "something"
      },
      {
        hash: "414bd24c3a76c30321f6ae2b2283e54f",
        url: "https://somethingElse.seetickets.com/av/tour/wicked/327",
        url_type: "something-online"
      }
    ],
    expected: null
  },
}

export default TestData
