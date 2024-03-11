//church section
document.addEventListener("DOMContentLoaded", function() {
    var imagesWithInfo = [
      { src: "../images/church/baptismFirst.png", heading: "Baptism Sunday of church", paragraph: " Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/church/girlFirst.png", smallParagraph: "~2 min read" },
      { src: "../images/church/baptismSecond.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/church/girlSecond.png", smallParagraph: "~2 min read" },
      { src: "../images/church/baptismThird.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/church/girlThird.png", smallParagraph: "~2 min read" },
      { src: "../images/church/baptismSecond.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/church/girlSecond.png", smallParagraph: "~2 min read" },
      { src: "../images/church/baptismThird.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/church/girlThird.png", smallParagraph: "~2 min read" },
      { src: "../images/church/baptismFirst.png", heading: "Baptism Sunday of church", paragraph: " Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/church/girlFirst.png", smallParagraph: "~2 min read" },
      { src: "../images/church/baptismFirst.png", heading: "Baptism Sunday of church", paragraph: " Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/church/girlFirst.png", smallParagraph: "~2 min read" },
      { src: "../images/church/baptismSecond.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/church/girlSecond.png", smallParagraph: "~2 min read" },
      { src: "../images/church/baptismThird.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/church/girlThird.png", smallParagraph: "~2 min read" },
      { src: "../images/church/baptismSecond.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/church/girlSecond.png", smallParagraph: "~2 min read" },
      { src: "../images/church/baptismThird.png", heading: "Baptism Sunday of church", paragraph: "Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/church/girlThird.png", smallParagraph: "~2 min read" },
      { src: "../images/church/baptismFirst.png", heading: "Baptism Sunday of church", paragraph: " Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...", smallImageSrc: "../images/church/girlFirst.png", smallParagraph: "~2 min read" },
      
      
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
    paginationItems.forEach(function(item) {
      item.classList.remove("active");
    });
    clickedPage.parentNode.classList.add("active");
  }

  // Initial display
  displayImages(currentPage);
  displayPagination();

  // Pagination click event
  document.getElementById("pagination").addEventListener("click", function(event) {
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
const data = [
  {
    image: "../images/people/vonda.png",
    logo: "../images/people/share.png",
    name: "John Doe",
    description: "Lorem ipsum "
  },
  {
    image: "../images/people/ronie.png",
    logo: "../images/people/share.png",
    name: "Alice Smith",
    description: "Sed do "
  },
  {
    image: "../images/people/lori.png",
    logo: "../images/people/share.png",
    name: "Mark Johnson",
    description: "Ut enim"
  },
  {
    image: "../images/people/annie.png",
    logo: "../images/people/share.png",
    name: "Emily Brown",
    description: "Duis aute"
  }
];
const personSection = document.getElementById('personSection');

data.forEach(person => {
  const personCard = document.createElement('div');
  personCard.classList.add('person-card');

  const personImage = document.createElement('img');
  personImage.src = person.image;

  const personContainer = document.createElement('div');
  personContainer.classList.add('person-container');

  const personDetails = document.createElement('div');
  personDetails.classList.add('person-details');

  const personName = document.createElement('div');
  personName.classList.add('person-name');
  personName.textContent = person.name;

  const description = document.createElement('p');
  description.textContent = person.description;

  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = person.logo;

  const socialIcons = document.createElement('ul');
  socialIcons.classList.add('social-icons');
  socialIcons.innerHTML = `
    <li><img src="facebook.png" alt="Facebook"></li>
    <li><img src="instagram.png" alt="Instagram"></li>
    <li><img src="twitter.png" alt="Twitter"></li>
  `;

  logo.addEventListener('click', function() {
    const activeLogo = document.querySelector('.active-logo');
    if (activeLogo !== logo) {
      if (activeLogo) {
        activeLogo.classList.remove('active-logo');
      }
      logo.classList.add('active-logo');
    }

    const activeSocialIcons = personCard.querySelector('.social-icons');
    if (activeSocialIcons.style.visibility === 'hidden') {
      activeSocialIcons.style.visibility = 'visible';
    } else {
      activeSocialIcons.style.visibility = 'hidden';
    }
  });

  personDetails.appendChild(personName);
  personDetails.appendChild(description);

  personContainer.appendChild(logo);
  personContainer.appendChild(personDetails);

  personCard.appendChild(personImage);
  personCard.appendChild(personContainer);
  personCard.appendChild(socialIcons); 

  personSection.appendChild(personCard);
});
