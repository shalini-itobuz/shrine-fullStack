const carouselContainer = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let images = [];

function updateCarousel() {
  carouselContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function goToNext() {
  currentIndex = Math.min(currentIndex + 1, images.length - 1);
  updateCarousel();
}

function goToPrev() {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateCarousel();
}

prevBtn.addEventListener('click', goToPrev);
nextBtn.addEventListener('click', goToNext);

fetch('http://localhost:8000/api/pages/pastorgallery')
  .then(response => response.json())
  .then(data => {
    images = data.message;
    images.forEach(image => {
      const img = document.createElement('img');
      img.src = image;
      img.alt = image;
      carouselContainer.appendChild(img);
    });
    // Initialize carousel position
    updateCarousel();
  })
  .catch(error => console.error('Error fetching images:', error));


  //-------------------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", async () => {
    const membersDiv = document.getElementById("members-div");
    const membersData = await fetch(
      "http://localhost:8000/api/pages/pastormembers"
    );
    const members = (await membersData.json()).message;
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
      shareImg.src = "http://localhost:8000/images/home/people/share.svg";
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
        card.appendChild(divFlex);
  
      const socialsDiv = document.createElement("div");
      socialsDiv.classList.add(
        "socials",
        "d-flex",
        "justify-content-center",
        "gap-4"
      );
      const instagram = document.createElement("div");
      const instagramIcon = document.createElement("img");
      instagramIcon.src = "http://localhost:8000/images/home/people/socials/instagram.svg";
      instagram.appendChild(instagramIcon);
      const google = document.createElement("div");
      const googleIcon = document.createElement("img");
      googleIcon.src = "http://localhost:8000/images/home/people/socials/google.svg";
      google.appendChild(googleIcon);
      const youtube = document.createElement("div");
      const youtubeIcon = document.createElement("img");
      youtubeIcon.src = "http://localhost:8000/images/home/people/socials/youtube.svg";
      youtube.appendChild(youtubeIcon);
      socialsDiv.append(instagram, google, youtube);
  
        card.appendChild(socialsDiv);
      const memberInfo = document.createElement("div");
      memberInfo.classList.add("memberInfo");
      memberInfo.append(divFlex, socialsDiv);
      card.append(memberInfo);
  
      membersDiv.appendChild(card);
    });
  });