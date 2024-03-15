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







     // ---------------------------------------------------------------------------
      const accordionContainerLeft = document.querySelector('#accordionLeft');
      const accordionContainerRight = document.querySelector('#accordionRight');
 
    async function fetchData() {
            try {
                const response = await fetch('http://localhost:8000/api/about/faqQuestions');
                const data = await response.json();
                return data.message;
            } catch (error) {
                console.error('Error fetching data:', error);
                return [];
            }
        }
    
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
      async function populateAccordions() {
            const accordionFAQs = await fetchData();
            accordionFAQs.forEach((faq, index) => {
                if (index < 5) {
                    accordionContainerLeft.append(createAccordion({ ...faq, index }));
                } else {
                    accordionContainerRight.append(createAccordion({ ...faq, index }));
                }
            });
        }
    
        populateAccordions();
