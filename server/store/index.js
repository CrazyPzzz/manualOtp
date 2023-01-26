const countries = {
  Thailand:{
    name: "Thailand",
    value: "th",
    providers: ['ANY', 'AIS', 'dtac', 'truemove'],
    substring: 2
  },
  Laos:{
    name: "Laos",
    value: "lo",
    providers: ['ANY','telekom'],
    substring: 3
  },
  Vietnam:{
    name: "Vietnam",
    value: "vn",
    providers: ['ANY'],
    substring: 2
  },
}
const services = [
    {
      name: "Discord",
      value: "ds",
    },
    {
      name: "Telegram",
      value: "tg",
    },
    {
      name: "Twitter",
      value: "tw",  
    },
    {
      name: "Viu",
      value: "wv",
    },
    {
      name: "BigC",
      value: "zu",
    },
    {
      name: "The1",
      value: "the",
    },
    {
      name: "Trueid",
      value: "tru",
    },
    {
      name: "Line msg",
      value: "me",
    },
    {
      name: "Facebook",
      value: "fb",
    },
    {
      name: "Vkontakte",
      value: "vk",
    },
    {
      name: "Shopee",
      value: "ka",
    },
    {
      name: "GrabTaxi",
      value: "jg",
    },
    {
      name: "Lotus",
      value: "rs",
    },
    {
      name: "JDcom",
      value: "za",
    },
    {
      name: "WashXpress",
      value: "cv",
    },
    {
      name: "Twitch",
      value: "hb",
    },
    {
      name: "Google",
      value: "go",
    },
    {
      name: "Lazada",
      value: "dl",
    },
    {
      name: "Foodpanda",
      value: "nz",
    },
    {
      name: "TikTok",
      value: "lf",
    },
    {
      name: "Netflix",
      value: "nf",
    },
	{
	  name: "WeTV",
      value: "wet",
	}
];

export default { countries, services };
