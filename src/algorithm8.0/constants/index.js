import {
    mobile,
    backend,
    creator,
    web,
    airbnb,
    binance,
    coinbase,
    dropbox,
    one,
    two,
    three,
    four
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "registration",
      title: "Register",
    },
    {
      id: "login",
      title: "Login",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Develoment",
      icon: web,
    },
    {
      title: "App Development",
      icon: mobile,
    },
    {
      title: "Machine Learning",
      icon: backend,
    },
    {
      title: "blockchain technology",
      icon: creator,
    },
  ];
  
  const timeline = [
    {
      title: "Event Registration",
      company_name: "Starbucks",
      icon: one,
      iconBg: "#383E56",
      date: "13th Feb 2024 - 20th Feb 2024",
      points: [
        "Participants have to register themselves and form a team of 4 members.",
      ],
    },
    {
      title: "Problem statement announcement",
      company_name: "Tesla",
      icon: two,
      iconBg: "#E6DEDD",
      date: "1st March 2024",
      points: [
        "Problem statements will be announce and team leader has to select on topic and start work on it.",
      ],
    },
    {
      title: "Team Reporting Day",
      company_name: "Shopify",
      icon: three,
      iconBg: "#383E56",
      date: "3rd March 2024",
      points: [
        "Each team has to report to AIKTC CAMPUS at 9:00 AM IST to 10:00 AM IST.",
      ],
    },
    {
      title: "Winner Announcement",
      company_name: "Meta",
      icon: four,
      iconBg: "#E6DEDD",
      date: "4th March 2024",
      points: [
        "Winner will be announce.",
      ],
    },
  ];
  
 const sponsers = [
    {
      id: "client-1",
      logo: airbnb,
    },
    {
      id: "client-2",
      logo: binance,
    },
    {
      id: "client-3",
      logo: coinbase,
    },
    {
      id: "client-4",
      logo: dropbox,
    },
  ];
  
  export { services, timeline, sponsers };
  