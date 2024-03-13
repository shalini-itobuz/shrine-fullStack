//church section
document.addEventListener("DOMContentLoaded", function () {
  const imagesWithInfo = [
    { src: "../images/home/church/baptismFirst.png", heading: "Baptism Sunday of church", paragraph: " Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/home/church/girlFirst.png", smallParagraph: "~2 min read" },
    { src: "../images/home/church/baptismSecond.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/home/church/girlSecond.png", smallParagraph: "~2 min read" },
    { src: "../images/home/church/baptismThird.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/home/church/girlThird.png", smallParagraph: "~2 min read" },
    { src: "../images/home/church/baptismSecond.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/home/church/girlSecond.png", smallParagraph: "~2 min read" },
    { src: "../images/home/church/baptismThird.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/home/church/girlThird.png", smallParagraph: "~2 min read" },
    { src: "../images/home/church/baptismFirst.png", heading: "Baptism Sunday of church", paragraph: " Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/home/church/girlFirst.png", smallParagraph: "~2 min read" },
    { src: "../images/home/church/baptismFirst.png", heading: "Baptism Sunday of church", paragraph: " Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/home/church/girlFirst.png", smallParagraph: "~2 min read" },
    { src: "../images/home/church/baptismSecond.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/home/church/girlSecond.png", smallParagraph: "~2 min read" },
    { src: "../images/home/church/baptismThird.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/home/church/girlThird.png", smallParagraph: "~2 min read" },
    { src: "../images/home/church/baptismSecond.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/home/church/girlSecond.png", smallParagraph: "~2 min read" },
    { src: "../images/home/church/baptismThird.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/home/church/girlThird.png", smallParagraph: "~2 min read" },
    { src: "../images/home/church/baptismFirst.png", heading: "Baptism Sunday of church", paragraph: " Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/home/church/girlFirst.png", smallParagraph: "~2 min read" },


  ];
  var currentPage = 1;
  var imagesPerPage = 3;

  function displayImages(page) {
    var imageGrid = document.getElementById("image-grid");
    imageGrid.innerHTML = "";
    var start = (page - 1) * imagesPerPage;
    var end = start + imagesPerPage;
    for (var i = start; i < end && i < imagesWithInfo.length; i++) {
      var div = document.createElement("div");
      div.className = "col-md-3 me-3 mb-4 card border-gray p-0 ";

      var img = document.createElement("img");
      img.src = imagesWithInfo[i].src;
      img.className = "card-img-top";
      div.appendChild(img);

      var cardBody = document.createElement("div");
      cardBody.className = "card-body";

      var heading = document.createElement("h5");
      heading.className = "card-title";
      heading.textContent = imagesWithInfo[i].heading;
      cardBody.appendChild(heading);

      var paragraph = document.createElement("p");
      paragraph.className = "card-text";
      paragraph.textContent = imagesWithInfo[i].paragraph;
      cardBody.appendChild(paragraph);

      var smallImageDiv = document.createElement("div");
      smallImageDiv.className = "d-flex align-items-center";

      var smallImage = document.createElement("img");
      smallImage.src = imagesWithInfo[i].smallImageSrc;
      smallImage.className = "rounded-circle mr-2";
      smallImage.style.width = "50px";
      smallImage.style.height = "50px";
      smallImageDiv.appendChild(smallImage);

      var smallParagraph = document.createElement("p");
      smallParagraph.className = "card-text";
      smallParagraph.textContent = imagesWithInfo[i].smallParagraph;
      smallImageDiv.appendChild(smallParagraph);

      cardBody.appendChild(smallImageDiv);

      div.appendChild(cardBody);

      imageGrid.appendChild(div);
    }
  }

  function displayPagination() {
    var totalPages = Math.ceil(imagesWithInfo.length / imagesPerPage);
    var pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    // Previous Button
    var prevLi = document.createElement("li");
    prevLi.className = "page-item";
    var prevLink = document.createElement("a");
    prevLink.className = "page-link";
    prevLink.href = "#";
    prevLink.textContent = "<";
    prevLi.appendChild(prevLink);
    pagination.appendChild(prevLi);

    // Next Button
    var nextLi = document.createElement("li");
    nextLi.className = "page-item";
    var nextLink = document.createElement("a");
    nextLink.className = "page-link";
    nextLink.href = "#";
    nextLink.textContent = ">";
    nextLi.appendChild(nextLink);
    pagination.appendChild(nextLi);

    for (var i = 1; i <= totalPages; i++) {
      var li = document.createElement("li");
      li.className = "page-item";
      var a = document.createElement("a");
      a.className = "page-link";
      a.href = "#";
      a.textContent = i;
      if (i === currentPage) {
        li.classList.add("active");
      }
      li.appendChild(a);
      pagination.insertBefore(li, nextLi);
    }
  }

  function updateActivePagination(clickedPage) {
    var paginationItems = document.querySelectorAll("#pagination .page-item");
    paginationItems.forEach(function (item) {
      item.classList.remove("active");
    });
    clickedPage.parentNode.classList.add("active");
  }

  // Initial display
  displayImages(currentPage);
  displayPagination();

  // Pagination click event
  document.getElementById("pagination").addEventListener("click", function (event) {
    event.preventDefault();
    var target = event.target;
    if (target.tagName === "A") {
      var targetPage = parseInt(target.textContent);
      if (!isNaN(targetPage)) {
        currentPage = targetPage;
        displayImages(currentPage);
        updateActivePagination(target);
      } else if (target.textContent === "<") {
        if (currentPage > 1) {
          currentPage--;
          displayImages(currentPage);
          updateActivePagination(target);
        }
      } else if (target.textContent === ">") {
        if (currentPage < Math.ceil(imagesWithInfo.length / imagesPerPage)) {
          currentPage++;
          displayImages(currentPage);
          updateActivePagination(target);
        }
      }
    }
  });
});




//see our all event


//people

document.addEventListener("DOMContentLoaded", async () => {
  const membersDiv = document.getElementById("members-div");
  const membersData = await fetch(
    "http://localhost:8000/api/home/churchpeople"
  );
  const members = await membersData.json();
  members.forEach((member) => {
    const card = document.createElement("div");
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("person-img");
    const img = document.createElement("img");
    img.src = member.link;
    imgDiv.appendChild(img);
    card.appendChild(imgDiv);

    const divFlex = document.createElement("div");
    divFlex.classList.add(
      "member-details",
      "d-flex",
      "justify-content-center",
      "gap-4",
      "align-items-center"
    );

    const share = document.createElement("div");
    share.classList.add(
      "share",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    const shareImg = document.createElement("img");
    shareImg.src = "../images/home/people/share.svg";
    share.appendChild(shareImg);

    const separator = document.createElement("div");
    separator.classList.add("separator");

    const nameDiv = document.createElement("div");
    const name = document.createElement("div");
    name.classList.add("fs-4", "fw-semibold");
    name.innerText = member.name;
    const smallName = document.createElement("p");
    smallName.innerText = member.smallName;
    nameDiv.append(name, smallName);

    divFlex.append(share, separator, nameDiv);
    //   card.appendChild(divFlex);

    const socialsDiv = document.createElement("div");
    socialsDiv.classList.add(
      "socials",
      "d-flex",
      "justify-content-center",
      "gap-4"
    );
    const instagram = document.createElement("div");
    const instagramIcon = document.createElement("img");
    instagramIcon.src = "../images/home/people/socials/instagram.svg";
    instagram.appendChild(instagramIcon);
    const google = document.createElement("div");
    const googleIcon = document.createElement("img");
    googleIcon.src = "../images/home/people/socials/google.svg";
    google.appendChild(googleIcon);
    const youtube = document.createElement("div");
    const youtubeIcon = document.createElement("img");
    youtubeIcon.src = "../images/home/people/socials/youtube.svg";
    youtube.appendChild(youtubeIcon);
    socialsDiv.append(instagram, google, youtube);

    //   card.appendChild(socialsDiv);
    const memberInfo = document.createElement("div");
    memberInfo.classList.add("memberInfo");
    memberInfo.append(divFlex, socialsDiv);
    card.append(memberInfo);

    membersDiv.appendChild(card);
  });
});

//medidation
const carouselData = [
  {
    image: '../images/home/events/ladyHands.png',
    logos: ['../images/home/events/calendar.png', '../images/home/events/home.png', '../images/home/events/clock.png'],
    paragraphs: ['24.12.2023-28.12.2023', 'Russian Federation St. Peter’s Church', '4:38-8:24'],
    title: 'Mindfulness meditation',
    details: 'A long established fact that a reader will be distracted by the readable content of...'
  },  {
    image: '../images/home/events/bible.png',
    logos: ['../images/home/events/calendar.png', '../images/home/events/home.png', '../images/home/events/clock.png'],
    paragraphs: ['24.12.2023-28.12.2023', 'The Positive Aura Seminar', '4:38-8:24'],
    title: 'Mindfulness meditation',
    details: 'A long established fact that a reader will be distracted by the readable content of...'
  },
  {
    image: '../images/home/events/ladyHands.png',
    logos: ['../images/home/events/calendar.png', '../images/home/events/home.png', '../images/home/events/clock.png'],
    paragraphs: ['24.12.2023-28.12.2023', 'Russian Federation St. Peter’s Church', '4:38-8:24'],
    title: 'Mindfulness meditation',
    details: 'A long established fact that a reader will be distracted by the readable content of...'
  },  {
    image: '../images/home/events/bible.png',
    logos: ['../images/home/events/calendar.png', '../images/home/events/home.png', '../images/home/events/clock.png'],
    paragraphs: ['24.12.2023-28.12.2023', 'The Positive Aura Seminar', '4:38-8:24'],
    title: 'Mindfulness meditation',
    details: 'A long established fact that a reader will be distracted by the readable content of...'
  },
 ];

const carouselContainer = document.getElementById('carouselContainer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Loop through the data and create card elements
carouselData.forEach(cardData => {
  const card = document.createElement('div');
  card.classList.add('eventcard');

  const image = document.createElement('img');
  image.src = cardData.image;
  image.alt = 'Image';
  image.classList.add("leftImage")
  card.appendChild(image);

  const content = document.createElement('div');
  content.classList.add("CardContent");

  cardData.logos.forEach((logo, index) => {
    const logoAndParaDiv = document.createElement('div');
    logoAndParaDiv.classList.add('logoAndParaDiv');

    const logoImg = document.createElement('img');
    logoImg.src = logo;
    logoImg.alt = 'Logo';
    logoImg.classList.add('eventlogo');
    logoAndParaDiv.appendChild(logoImg);

    const paragraph = document.createElement('p');
    paragraph.textContent = cardData.paragraphs[index];
    paragraph.classList.add("eventparagraph")
    logoAndParaDiv.appendChild(paragraph);

    content.appendChild(logoAndParaDiv);
  });

  const title = document.createElement('p');
  title.classList.add('eventtitle');
  title.textContent = cardData.title;
  content.appendChild(title);

  const details = document.createElement('p');
  details.textContent = cardData.details;
  content.appendChild(details);

  const joinButton = document.createElement('button');
  joinButton.classList.add('joinbutton');
  joinButton.textContent = 'Join Now';
  content.appendChild(joinButton);

  card.appendChild(content);
  carouselContainer.appendChild(card);
});

// Event listeners for previous and next buttons
prevButton.addEventListener('click', () => {
  carouselContainer.scrollBy({
    left: -280, 
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  carouselContainer.scrollBy({
    left: 280, 
    behavior: 'smooth'
  });
});
