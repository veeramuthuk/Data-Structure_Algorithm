const data = [
  {
    state: "TAMILNADU",
    description:
      "Tamil Nadu has the largest tourism industry in India with a percentage share of 21.31% and 21.86% of domestic and foreign tourist visits in the country. According to the 2020 Ministry of Tourism report, the number of domestic arrivals was at 494.8 million making the state the second most popular tourist destination in the country, and foreign arrivals numbered 6.86 million, the highest in the country, making it the most popular state for tourism in the country",
    cities: [
      {
        name: "Madurai",
        image: "madurai temple.jpg",
      },
      {
        name: "Ooty",
        image: "ooty image.jpg",
      },
      {
        name: "Tanjai Temple",
        image: "tanjai temple.jpg",
      },
      {
        name: "Marina Beach",
        image: "tamil beach 2.jfif",
      },
    ],
  },
  {
    state: "KERALA",
    description:
      'The Kerala Tourism Development Corporation (KTDC) is a public sector undertaking that conducts and regulates the tourism activities in the Indian state of Kerala. The KTDC is headquartered at Thiruvananthapuram and has offices across all the districts of Kerala. The agency also operates hotels, resorts, and tourist rest houses in key locations in the state. Its official slogan is "Official host to God\'s own country." It is one of the most profitable ventures of the Kerala government',
    cities: [
      {
        name: "Mlabar River",
        image: "kerala-1.jfif",
      },
      {
        name: "Padamanabhan temple",
        image: "kerala temple image.webp",
      },
      {
        name: "Munnar",
        image: "kerala munnar.jpg",
      },
      {
        name: "Kathakali culture",
        image: "Kerala- kathakali.webp ",
      },
    ],
  },
  {
    state: "DELHI",
    description:
      "Delhi Tourism and Transportation Development Corporation (DTTDC) is an undertaking of the Government of Delhi, India, that was established in December 1975 for the purpose of promoting tourism and related services in the city of Delhi. It has an authorised share capital of Rs. 10.00 crores and a paid up capital of Rs. 6.28 crores. It is involved in several other activities, some of which do not fall under the core activity of promotion of tourism, such as the selling of liquor. This particular activity, however, provides the corporation with revenue that can be utilised in tourism or other related development activities for the National Capital Region of Delhi",
    cities: [
      {
        name: "India Gate",
        image: "india gate delhi.jpg",
      },
      {
        name: "Qutb Minar",

        image: "delhi cave.jpg",
      },
      {
        name: "Akshardham temple",

        image: "delhi temple.jpg",
      },
      {
        name: "Taj Mahal",

        image: "taj mahal.jpg",
      },
    ],
  },
  {
    state: "GOA",
    description:
      "The state of Goa, in India, is famous for its beaches and places of worship. Tourism is its primary industry, and is generally focused on the coastal areas of Goa, with decreased tourist activity inland. Foreign tourists, mostly from Europe, arrive in Goa in winter, whilst the summer and monsoon seasons see many Indian tourists. Goa handled 2.29% of all foreign tourist arrivals in the country in 2011",
    cities: [
      {
        image: "goa pictures 1.jpg",
      },
      {
        image: "goa 2 pic.jpg",
      },
      {
        image: "goa 3 pic.jpg",
      },
      {
        image: "goa 4.jpg",
      },
    ],
  },
];

data.forEach((item) => {
  document.querySelector(".body").innerHTML += `
<section class="section1">
<div class="t">
    <h2 class="hd">${item.state}</h2>
</div>
<p class="para">${item.description}</p>
<div class="im123 naturalvision">
  ${item.cities.forEach((city) => {
    `<div>
    <h2>${city.name}</h2>
    <img alt="common-img" class="im1" src=${`/images/${city.image}`}>
</div>`;
  })}
</section>`;
});
