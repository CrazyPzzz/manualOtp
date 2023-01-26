import axios from "axios";
import store from "../store";
export default defineEventHandler(async (event) => {
  const result = [
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
  const query = getQuery(event);
  const { country, login, apiPassword, service, provider } = query;
  for (const [i, service] of store.services.entries()) {
    const params = {
      clientId: login,
      apiPassword: apiPassword,
      service: service.value,
      country: country.toLowerCase(),
      provider: provider,
    };
    await axios
      .post("https://proxy.otp-service.online/v1/GetNumbersCount", params)
      .then((data) => {
        result[i].value = data.data.count;
      })
      .catch((err) => console.log(err));
  }
  return result;
});
