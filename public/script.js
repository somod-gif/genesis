let screen = document.getElementById("screen");
function dm() {
  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}
let moviesarray = [
  {
    id: 1,
    image: "./black panther.jpeg",
    title: "Black panther",
    video: "https://youtu.be/_Z3QKkl1WyM",
    description:
      " Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.",
  },
  {
    id: 2,
    image: "./ride-film-2018-teaser-poster.jpg",
    title: "The Rider",
    description:
      "The inspiring story of a BMX champion who overcame an abusive childhood through the love and life lessons of his interracial foster family.",
  },
  {
    id: 3,
    image: "./inheritance-2020-03.jpg",
    title: "Inheritance",
    description:
      "A patriarch of a wealthy and powerful family suddenly passes away, leaving his wife and daughter with a shocking secret inheritance that threatens to unravel and destroy their lives.",
  },
  {
    id: 4,
    image: "./ud7XxBDuoq2aTi8HajDXP6F0bSU.jpg",
    title: "The Courier",
    description:
      "Ezekiel Mannings, a wealthy businessman and notorious crime lord who is under house arrest in New York, seeks the elimination of Nick Murch, the only witness who can tie him to a murder. Murch is sequestered in a heavily guarded safe room in London in order to give evidence against Mannings over a video link to the United States. An unnamed female courier and former special ops soldier delivers a package to the safe room.",
  },
  {
    id: 5,
    image: "./antman quantum.jpg",
    title: "ANTMAN",
    description:
      "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that ",
  },
  {
    id: 6,
    image: "./2gQrVH2rWM3apnUqzigDvafHTJU.jpg",
    title: "The Hate U Give",
    description:
      "Starr Carter is constantly switching between two worlds: the poor, mostly black, neighborhood where she lives and the rich, mostly white, prep school she attends. The uneasy balance between these worlds is shattered when Starr witnesses the fatal shooting of her childhood best friend Khalil at the hands of a police officer. Now, facing pressures from all sides of the community, Starr must find her voice and stand up for what's right.",
  },
  {
    id: 7,
    image:
      "./red-sparrow-original-movie-poster-15x21-in-2018-francis-lawrence-jennifer-lawrence.jpg",
    title: "Red Sparrow",
    description:
      "Dominika Egorova, a former ballerina, enrols in a Russian Intelligence programme and becomes a sparrow, using her body as a weapon to entrap a CIA agent.",
  },
  // {
  //   id: 8,
  //   image: "./battle on bukka street.jpg",
  //   title: "Black panther",
  //   description: "",
  // },
  {
    id: 9,
    image: "./love in a pandemic.jpg",
    title: "LOVE IN A PANDEMIC",
    description:
      "Love In A Pandemic captures a love story which happens amidst one of the most unforgettable moments in human history, the Covid 19 Pandemic. It follows the story of Bolanle",
  },
  {
    id: 10,
    image: "./luther.jpg",
    title: "LUTHER: THE FALLEN SUN",
    description:
      "Brilliant but disgraced detective John Luther breaks out of prison to hunt down a sadistic serial killer who is terrorising London.",
  },
  {
    id: 11,
    image: "./puss in both2.jpg",
    title: "PUSS IN BOOTS 2",
    description:
      "Puss in Boots discovers that his passion for adventure has taken its toll: he has burnt through eight of his nine lives. Puss sets out on an epic journey to find the mythical",
  },
  {
    id: 12,
    image: "cocaine bear.jpg",
    title: "Black panther",
    description: "",
  },
  {
    id: 13,
    image: "./creed 3.jpg",
    title: "CREED 3",
    description:
      "Still dominating the boxing world, Adonis Creed is thriving in his career and family life. When Damian, a childhood friend and former boxing prodigy resurfaces after serving",
  },
  {
    id: 14,
    image: "./black panther.jpeg",
    title: "Babylon",
    description:
      "From Damien Chazelle, BABYLON is an original epic set in 1920s Los Angeles led by Brad Pitt, Margot Robbie and Diego Calva.",
  },
  {
    id: 15,
    image: "./black panther.jpeg",
    title: "What’s Love Got to Do With It?",
    description:
      "In London, an award-winning filmmaker documents her best friend’s journey into an assisted marriage in line with his family’s Pakistani heritage.",
  },
  {
    id: 16,
    image: "./black panther.jpeg",
    title: "Missing",
    description:
      "From the minds behind Searching comes Missing, a thrilling roller-coaster mystery that makes you wonder how well you know those closest to you.",
  },
  {
    id: 17,
    image: "./black panther.jpeg",
    title: "The Wandering Earth II",
    description:
      "Synopsis : In the near future, the sun is rapidly expanding and will engulf the earth within 100 years. To ensure the survival of humankind, nations join hands to form an unprecedented, ambitious global project to build powerful engines on the earth's surface and propel the planet away from impending doom.",
  },
  {
    id: 18,
    image: "./black panther.jpeg",
    title: "Black panther",
    description: "",
  },
  {
    id: 19,
    image: "./black panther.jpeg",
    title: "Black panther",
    description: "",
  },
  {
    id: 20,
    image: "./black panther.jpeg",
    title: "Black panther",
    description: "",
  },
];
// let moviesarray = JSON.parse(localStorage.getItem("moviesarray"));
// console.log(moviesarray);
for (let index = 0; index < moviesarray.length; index++) {
  const element = moviesarray[index];
  document.getElementById("screen").innerHTML += `
    <div class="allmovie">
      <div class="movie">
        <div class="mv-img mx-4 mt-2 ">
          <img src="${element.image}" alt="">  
        </div>
        <h4 class="mx-4">${element.title}</h4>
        <button class="btn btn-outline-danger mx-4" onclick="moviedetials(${index})"><a class="cvc" href="#dtss">Click to see full details</a></button>
      </div>
    </div>
`;
}
// let moviesarray = JSON.parsh(localStorage.getItem("moviesarray"));
function moviedetials(index) {
  document.getElementById("movie_details").innerHTML = "";
  document.getElementById("movie_details").innerHTML += `
  <div id="dtss">
      <div>
          <div class="det-img">
              <img src="${moviesarray[index].image}" alt="">
          </div>
          <h1 class="text-warning h1dts">${moviesarray[index].title}</h1>
          <h3 class="text-light h3dts">${moviesarray[index].description}</h3>
      </div>
      <div class="d-flex">
      <button type="button" class="btn btn-danger mx-4 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
          WATCH TRAILER
      </button>
      <div class="modal fade modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Watch Trailer for ${moviesarray[index].title}</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <div class="mx-5">
                        <iframe width="660" height="340" src="https://www.youtube.com/embed/_Z3QKkl1WyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                        </iframe>
                      </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
      <button type="button" class="btn btn-danger mx-4 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Book Ticket
      </button>
      <div class="modal fade modal-xl" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Make Payment for ${moviesarray[index].title} </h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <div class="aboutticket d-flex">
                          <section class="ticket ">
                              <h2>Ticket</h2>
                              <p>Price: $100 per person</p>
                              <div class="quantity">
                                <button class="btn btn-outline-danger" id="decreasePersonsBtn" onclick="decreaseNumPersons()">-</button>
                                <button class="btn btn-outline-danger" id="increasePersonsBtn" onclick="increaseNumPersons()">+</button>
                                <h3>Number of Persons: <br> <span id="numPersons">1</span></h3>
                              </div>
                              <h3>Total:  $<span id="ticketAmount">100</span></h3>
                          </section>
                          <section class="refreshment mx-4 ">
                              <h2>Refreshment</h2>
                              <p>Price: $5 per popcorn and drink</p>
                              <div class="quantity">
                                  <button class="btn btn-outline-danger" id="decreaseRefreshmentBtn" onclick="removeRefreshment()">-</button>
                                  <button  class="btn btn-outline-danger" id="increaseRefreshmentBtn" onclick="addRefreshment()">+</button>
                                  <h4>Number of Refreshment for Each Person: <br> <span id="numRefreshments">0</span></h4>
                              </div>
                              <h3>Total: $<span id="refreshmentAmount">0</span></h3>
                          </section>
                        <section class="checkout">
                            <h2>Checkout</h2>
                            <button class="btn btn-outline-primary" id="checkoutBtn" onclick="makePayment()">Checkout</button>
                            <h3>Total Amount: $<span id="totalAmount">100</span></h3>
                        </section>
                    </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
        
      </div>
  </div>
  `;
}
// index();

//  <img class="det-img" src="${moviesarray[index].image}" alt="">

// Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.

{
  /* <button type="button" class="btn btn-danger mx-4 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  WATCH TRAILER
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_Z3QKkl1WyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */
}
function makePayment() {
  let ticketAmount = ticketPrice * numPersons;
  let refreshmentAmount = refreshmentPrice * numRefreshments * numPersons;
  let totalAmount = ticketAmount + refreshmentAmount;
  FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-52df64732ffd5c7c412d93d3aaf42cb6-X",
    tx_ref: "titanic-48981487343MDI0NzMx",
    amount: totalAmount,
    currency: "USD",
    payment_options: "card, mobilemoneyghana, ussd",
    redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: "somodbadmus@gmail.com",
      phone_number: "08146438621",
      name: "Badmus Eniola",
    },
    customizations: {
      title: "The Genesis Cinema",
      description:
        "Enjoy unlimited fun and total comfort watching movies at our cinemas with friends and loved ones🥳",
      logo: "https://genesiscinemas.com/wp-content/uploads/2022/04/LOGO.png",
    },
  });
  window.print();
}
function gotosignin() {
  window.location.href = "./signup.html";
}
// initial values
let ticketPrice = 100;
let refreshmentPrice = 5;
let numPersons = 1;
let numRefreshments = 0;

// functions for updating the amounts
function updateTicketAmount() {
  let ticketAmount = ticketPrice * numPersons;
  document.getElementById("ticketAmount").innerHTML = ticketAmount;
  updateTotalAmount();
}

function addRefreshment() {
  numRefreshments += 1;
  document.getElementById("numRefreshments").innerHTML = numRefreshments;
  updateRefreshmentAmount();
}

function removeRefreshment() {
  if (numRefreshments > 0) {
    numRefreshments -= 1;
    document.getElementById("numRefreshments").innerHTML = numRefreshments;
    updateRefreshmentAmount();
  }
}

function updateRefreshmentAmount() {
  let refreshmentAmount = refreshmentPrice * numRefreshments * numPersons;
  document.getElementById("refreshmentAmount").innerHTML = refreshmentAmount;
  updateTotalAmount();
}

function increaseNumPersons() {
  numPersons += 1;
  document.getElementById("numPersons").innerHTML = numPersons;
  updateTicketAmount();
}

function decreaseNumPersons() {
  if (numPersons > 1) {
    numPersons -= 1;
    document.getElementById("numPersons").innerHTML = numPersons;
    updateTicketAmount();
  }
}

function updateTotalAmount() {
  let ticketAmount = ticketPrice * numPersons;
  let refreshmentAmount = refreshmentPrice * numRefreshments * numPersons;
  let totalAmount = ticketAmount + refreshmentAmount;
  document.getElementById("totalAmount").innerHTML = totalAmount;
}

// initial updates
updateTicketAmount();
updateRefreshmentAmount();
updateTotalAmount();
//npm init react-app reactjs
//https://apply.workable.com/kuda/
//https://web.whatsapp.com/desktop/windows/release/x64/WhatsAppSetup.exe
// My backend
// PYTHON
// MSQL
// DJANGO
