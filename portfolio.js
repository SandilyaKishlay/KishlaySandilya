
    function typeJobPositions(jobPositions) {
        const jobPositionsElement = document.getElementById('jobPositions');
        let index = 0;
    
        function typeNext() {
            // Clear previous spans
            while (jobPositionsElement.firstChild) {
                jobPositionsElement.removeChild(jobPositionsElement.firstChild);
            }
    
            if (index < jobPositions.length) {
                const position = jobPositions[index];
                const span = document.createElement('span');
                span.classList.add('typing-span');
                span.textContent = position;
                jobPositionsElement.appendChild(span);
    
                setTimeout(() => {
                    span.style.width = '0';
                    span.textContent = '';
                    index++;
                    typeNext();
                }, 5000); // Time for which each position is shown
            }
        }
    
        typeNext();
    }
    
    function startTyping() {
        const jobPositions = ['Technical Developer','Data Analyst'];
        typeJobPositions(jobPositions);
    }
    
    startTyping()
    setInterval(startTyping, 12000);
    
    
        // Function to update navigation style based on current URL hash
        function updateNavigation() {
            var hash = window.location.hash.substr(1); // Get the hash part of the URL
    
            // Remove 'orange' class from all links
            var links = document.querySelectorAll('nav ul li a ');
            links.forEach(function(link) {
                link.classList.remove('orange');
            });
    
            // Add 'orange' class to the link corresponding to the current hash
            var currentLink = document.getElementById(hash + 'Link');
            if (currentLink) {
                currentLink.classList.add('orange');
            }
        }
    
        // Update navigation style on page load and when hash changes
        window.onload = updateNavigation;
        window.onhashchange = updateNavigation;
    
   
    function createTechStack(techStackData) {
        const container = document.getElementById('tech-stack');
    
        techStackData.forEach(item => {
            const stackName = item.name;
            const percentage = item.percentage;
    
            const stackDiv = document.createElement('div');
            stackDiv.classList.add('tech-stack-item');
    
            // Add stack name with span for styling
            const nameSpan = document.createElement('span');
            nameSpan.textContent = stackName;
            stackDiv.appendChild(nameSpan);
    
            const meterDiv = document.createElement('div');
            meterDiv.classList.add('meter');
            const meterFillDiv = document.createElement('div');
            meterFillDiv.classList.add('meter-fill');
            meterFillDiv.style.width = percentage + '%';
            meterDiv.appendChild(meterFillDiv);
    
            stackDiv.appendChild(meterDiv);
    
            // Add percentage value with span for styling
            const percentageSpan = document.createElement('span');
            percentageSpan.textContent = percentage + '%';
            stackDiv.appendChild(percentageSpan);
    
            container.appendChild(stackDiv);
        });
    }
    
    // Example data
    const techStackData = [
        { name: 'HTML', percentage: 80 },
        { name: 'CSS', percentage: 70 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'React', percentage: 75 },
        { name: 'Node.js', percentage: 60 }
    ];
    
    // Call the function with example data
    createTechStack(techStackData);
    



    function createProjectCards(projects, containerId) {
        const container = document.getElementById(containerId);
    
        projects.forEach(project => {
            const projectName = project.name;
            const imageSrc = project.image;
            const description = project.description;
            const link = project.link;
    
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
    
            const image = document.createElement('img');
            image.src = imageSrc;
            projectCard.appendChild(image);
    
            const projectNameElement = document.createElement('h3');
            projectNameElement.textContent = projectName;
            projectCard.appendChild(projectNameElement);
    
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = description;
            projectCard.appendChild(descriptionElement);
    
            const linkElement = document.createElement('a');
            linkElement.textContent = 'View Project';
            linkElement.href = link;
            linkElement.target = '_blank'; // Open link in new tab
            projectCard.appendChild(linkElement);
    
            container.appendChild(projectCard);
        });
    }
    
    // Example data for live projects
    const liveProjectsData = [
        { name: 'Project 1', image: 'project1.jpg', description: 'Description of Project 1', link: 'https://example.com/project1' },
        { name: 'Project 2', image: 'project2.jpg', description: 'Description of Project 2', link: 'https://example.com/project2' },
        { name: 'Project 1', image: 'project1.jpg', description: 'Description of Project 1', link: 'https://example.com/project1' },
        { name: 'Project 2', image: 'project2.jpg', description: 'Description of Project 2', link: 'https://example.com/project2' }
    ];
    
    // Example data for GitHub projects
    const githubProjectsData = [
        { name: 'Project 3', image: 'project3.jpg', description: 'Description of Project 3', link: 'https://github.com/username/project3' },
        { name: 'Project 4', image: 'project4.jpg', description: 'Description of Project 4', link: 'https://github.com/username/project4' }
    ];
    
    // Call the function to create project cards for live projects
    createProjectCards(liveProjectsData, 'live-projects');
    
    // Call the function to create project cards for GitHub projects
    createProjectCards(githubProjectsData, 'github-projects');
    


function createCompanyCarousel(companies, indicatorsId, innerId) {
            const indicators = document.getElementById(indicatorsId);
            const inner = document.getElementById(innerId);

            companies.forEach((company, index) => {
                // Create indicator
                const indicator = document.createElement('li');
                indicator.setAttribute('data-target', '#carouselExampleIndicators');
                indicator.setAttribute('data-slide-to', index);
                if (index === 0) {
                    indicator.classList.add('active');
                }
                indicators.appendChild(indicator);

                // Create carousel item
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if (index === 0) {
                    carouselItem.classList.add('active');
                }

                const companyDiv = document.createElement('div');
                companyDiv.classList.add('company-div');

                const logo = document.createElement('img');
                logo.src = company.logo;
                logo.classList.add('company-logo');
                companyDiv.appendChild(logo);

                const companyNameElement = document.createElement('h3');
                companyNameElement.textContent = company.name;
                companyDiv.appendChild(companyNameElement);

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = company.description;
                companyDiv.appendChild(descriptionElement);

                const roleElement = document.createElement('p');
                roleElement.classList.add('role');
                roleElement.textContent = `Role: ${company.role}`;
                companyDiv.appendChild(roleElement);

                carouselItem.appendChild(companyDiv);
                inner.appendChild(carouselItem);
            });
        }

        const companiesData = [
            { name: 'Company 1', logo: 'company1.jpg', description: 'Description of Company 1', role: 'Software Engineer' },
            { name: 'Company 2', logo: 'company2.jpg', description: 'Description of Company 2', role: 'Product Manager' }
        ];

        createCompanyCarousel(companiesData, 'carousel-indicators', 'carousel-inner');
    

    function createTestimonialsCarousel(testimonials, indicatorsId, innerId) {
        const indicators = document.getElementById(indicatorsId);
        const inner = document.getElementById(innerId);

        testimonials.forEach((testimonial, index) => {
            // Create indicator
            const indicator = document.createElement('li');
            indicator.setAttribute('data-target', '#testimonialsCarousel');
            indicator.setAttribute('data-slide-to', index);
            if (index === 0) {
                indicator.classList.add('active');
            }
            indicators.appendChild(indicator);

            // Create carousel item
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) {
                carouselItem.classList.add('active');
            }

            const testimonialDiv = document.createElement('div');
            testimonialDiv.classList.add('testimonial-div');

            const image = document.createElement('img');
            image.src = testimonial.image;
            image.classList.add('testimonial-image');
            testimonialDiv.appendChild(image);

            const clientNameElement = document.createElement('h3');
            clientNameElement.textContent = testimonial.name;
            testimonialDiv.appendChild(clientNameElement);

            const clientPositionElement = document.createElement('p');
            clientPositionElement.textContent = testimonial.position;
            clientPositionElement.style.fontStyle = 'italic';
            testimonialDiv.appendChild(clientPositionElement);

            const testimonialTextElement = document.createElement('p');
            testimonialTextElement.textContent = testimonial.text;
            testimonialDiv.appendChild(testimonialTextElement);

            carouselItem.appendChild(testimonialDiv);
            inner.appendChild(carouselItem);
        });
    }

    const testimonialsData = [
        { image: 'client1.jpg', name: 'Client 1', position: 'CEO, Company 1', text: 'This is a great service!' },
        { image: 'client2.jpg', name: 'Client 2', position: 'CTO, Company 2', text: 'Highly recommended!' },
        { image: 'client3.jpg', name: 'Client 3', position: 'Manager, Company 3', text: 'Very satisfied with the results!' }
    ];

    createTestimonialsCarousel(testimonialsData, 'testimonial-indicators', 'testimonial-inner');
