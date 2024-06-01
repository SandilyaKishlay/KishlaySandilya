
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
        { name: 'HTML', percentage: 100 },
        { name: 'CSS', percentage: 100 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'Python', percentage: 75 },
        { name: 'Django', percentage: 90 },
        { name: 'Node.js', percentage: 40 },
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
        { name: 'Signam.org', image: 'Images/signam.jpeg', description: 'signam.org is a platform dedicated to providing a cutting-edge auto-trading solution for individuals and organizations. Our platform offers a sophisticated trading algorithm that operates 24/7, allowing users to effortlessly engage in trading activities while they relax. Built with a focus on security, ease of use, and scalability, xsignam.org simplifies the trading process, providing users with a seamless and hassle-free experience.', link: 'https://signam.org' },
        { name: 'Alphaedge.life', image: 'Images/alphaedge.jpeg', description: 'alphaedge.life is a real-time platform designed to provide clients with comprehensive trading data and statistics, showcasing the performance and effectiveness of our trading algorithm. With a focus on transparency and accuracy, alphaedge.life offers a detailed insight into the workings of our trading algorithm, empowering clients to make informed decisions and stay updated on market trends.', link: 'https://alphaedge.life' },
        
    ];
    
    // Example data for GitHub projects
    const githubProjectsData = [
        { name: 'ScientificAxis', image: 'Images/scientificaxes.jpeg', description: 'This API defines a base AxisRange class that represents a range of values on an axis. It has two attributes, start and stop, that define the start and end points of the range. It also has a transform attribute that is used to apply a non-linear transformation to the axis values.The LinearRange class is a subclass of AxisRange that defines a linear range of values. It does not have a transform attribute since a linear transformation is the default.', link: 'https://github.com/SandilyaKishlay/Scientific-axes' },
        { name: 'MicroService based system', image: 'Images/microservice.jpeg', description: 'In this assignment, I build a microservices-based system that manages a simple e-commerce application. The system should handle user authentication, product management, and order processing. Emphasis will be placed on implementing concurrency control and ensuring the system can handle clustering for high availability.', link: 'https://github.com/SandilyaKishlay/MicroService-based-system' },
        { name: 'Option-Chain data display', image: 'Images/datamining.jpeg', description: 'This repository contains a Django project for displaying Option Chain data fetched from an NSE (National Stock Exchange) Official Website. The web application presents the fetched data in a table format with different attributes for Call and Put options.',link:'https://github.com/SandilyaKishlay/-Option-Chain-Data-Display-using-Django' }

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
            { name: 'Signam.org', logo: 'Images/signam.jpeg', description: 'Empower your trading journey with our AI-powered platform. We specialize in strategy-based trading solutions for index, commodity, and stock markets. With a focus on risk management, we ensure consistent returns while you relax. Join thousands of successful traders who trust our proven strategies.', role: 'Technical Developer' },
            { name: 'Inovetic technologies', logo: 'Images/inovetic.jpeg', description: 'This is tech based company', role: 'Full-stack Developer' }
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
