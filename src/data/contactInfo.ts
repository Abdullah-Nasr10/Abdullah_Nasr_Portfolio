// src/data/contactInfo.ts

import type { ContactInfo } from "../types/ContactInfo";

export const contactInfo: ContactInfo[] = [
  {
    id: 1,
    type: "address",
    title: "Address",
    value: "Qena - Egypt",
    icon: "fa-solid fa-location-dot",
    link: null,
  },
  {
    id: 2,
    type: "email",
    title: "Email",
    value: "abdullah.nasr1022@gmail.com",
    icon: "fa-regular fa-envelope",
    link: "mailto:abdullah.nasr1022@gmail.com",
  },
  {
    id: 3,
    type: "phone",
    title: "Phone",
    value: "+20 103 320 7428",
    icon: "fa-solid fa-phone",
    link: "tel:+201033207428",
  },
  {
    id: 4,
    type: "freelance",
    title: "freelance",
    value: "Available Right Now",
    icon: "fa-regular fa-user",
    link: null,
  },
];
