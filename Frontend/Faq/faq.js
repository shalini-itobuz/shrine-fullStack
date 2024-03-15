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
  
    fetch('http://localhost:8000/api/about/faq')
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







      //---------------------------------------------------------------------------
      const accordionContainerLeft = document.querySelector('#accordionLeft');
      const accordionContainerRight = document.querySelector('#accordionRight');
      const accordionFAQs = [
          {
              title: "Who are the Disciples of Christ?",
              subtitle: "A long established fact that a reader will be established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
          },
          {
            title: "How big is the church?",
            subtitle: "A long established fact that a reader will be established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
        },   {
            title: "What time is your Sunday service?",
            subtitle: "A long established fact that a reader will be established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
        },   {
            title: "What do you offer  and toddlers?",
            subtitle: "A long established fact that a reader will be established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
        },   {
            title: "Who goes to your church?",
            subtitle: "A long established fact that a reader will be established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
        },   {
            title: "Can a visitor take communion?",
            subtitle: "A long established fact that a reader will be established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
        },   {
            title: "Who are your ministers?",
            subtitle: "A long established fact that a reader will be established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
        },   {
            title: "With whom do I talk know more?",
            subtitle: "A long established fact that a reader will be established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
        },   {
              title: "Who  the Disciples of Christ?",
              subtitle: "A long established fact that a reader will be established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
          },
      ]
      const createAccordion = ({ title, subtitle, index }) => {

          const accordionWrapper = document.createElement('DIV');
          accordionWrapper.setAttribute('class', 'accordion-item border-0 border-bottom flex-shrink-0');

          const accordionTitle = document.createElement('div');
          accordionTitle.setAttribute('class', 'accordion-header');
          accordionWrapper.appendChild(accordionTitle);

          const accordionButton = document.createElement('BUTTON');
          accordionButton.setAttribute('class', 'accordion-button collapsed fw-bold');
          accordionButton.setAttribute('type', 'button');
          accordionButton.setAttribute('data-bs-toggle', 'collapse');
          accordionButton.setAttribute('data-bs-target', `#collapse${index}`);
          accordionButton.textContent = title;
          accordionTitle.appendChild(accordionButton);

          const accordionContentDiv = document.createElement('DIV');
          accordionContentDiv.setAttribute('id', `collapse${index}`);
          accordionContentDiv.setAttribute('class', 'accordion-collapse collapse');
          accordionContentDiv.setAttribute('data-bs-parent', '#accordionExample');
          accordionWrapper.appendChild(accordionContentDiv);

          const accordionBody = document.createElement('DIV');
          accordionBody.setAttribute('class', 'accordion-body');
          accordionBody.textContent = subtitle;
          accordionContentDiv.appendChild(accordionBody);


          return accordionWrapper;

      }

      accordionFAQs.forEach((faq, index) => {
          if (index < 5) {
              accordionContainerLeft.append(createAccordion({ ...faq, index }));
          } else {
              accordionContainerRight.append(createAccordion({ ...faq, index }));
          }
      })