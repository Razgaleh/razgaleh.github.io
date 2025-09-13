import {
    bio,
    skills,
    projects,
    education,
    certs,
    experience,
    footer,
  } from "./data.js";




import { URLs } from './user-data/urls.js';
  
  const { mlaiProjects,webProjects, softwareProjects, physicsProjects } =
    projects;
  const { medium, gitConnected } = URLs;
  
  /**
   * Fetches blogs from Medium profile.
   *
   * @function
   * @async
   *
   * @throws {Error} If there is any error in fetching the blogs from Medium profile.
   *
   * @returns {void}
   */
  
  async function fetchBlogsFromMedium(url) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data && data.items) {
        populateBlogs(data.items, "blogs");
      } else {
        console.error("No items found in API response:", data);
        // Show a fallback message
        const projectdesign = document.getElementById("blogs");
        projectdesign.innerHTML = '<p style="color: #8B5FBF; text-align: center; padding: 2rem;">Blog posts are currently unavailable. Please check back later.</p>';
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      // Show error message in the blogs section
      const projectdesign = document.getElementById("blogs");
      projectdesign.innerHTML = '<p style="color: #8B5FBF; text-align: center; padding: 2rem;">Unable to load blog posts at the moment. Please try again later.</p>';
    }
  }


  async function fetchGitConnectedData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.warn('GitConnected API not available, skipping...');
        return;
      }
      const data = await response.json();
      if (data && data.basics) {
        mapBasicResponse(data.basics);
      }
    } catch (error) {
      console.warn('GitConnected API error:', error.message);
    }
  }

  function mapBasicResponse(basics) {
    const {
      name,
      label,
      image,
      email,
      phone,
      url,
      summary,
      profiles,
      headline,
      blog,
      yearsOfExperience,
      username,
      locationAsString,
      region,
      karma,
      id,
      followers,
      following,
      picture,
      website
  } = basics;
  
  // added title of page
    window.parent.document.title = name;
  }
  
  /**
   * Populates bio to the HTML page.
   *
   * @function
   *
   * @param {Array} items - An array of objects that contain bio information.
   * @param {string} id - The id of the HTML element to which bio will be appended.
   *
   * @returns {void}
   */
  
  function populateBio(items, id) {
    const bioTag = document.getElementById(id);
    items.forEach((bioItem) => {
      const p = getElement("p", null);
      p.innerHTML = bioItem;
      bioTag.append(p);
    });
  }
 
  
  function scrollToSection(title) {
    const sectionId = `${title.trim().toLowerCase().replace(/\s+/g, '-')}-skills`;
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.warn(`Section with id "${sectionId}" not found`);
    }
}

function populateSkills(items, id) {
    const skillsTag = document.getElementById(id);
    if (!skillsTag) {
        console.error(`Element with id "${id}" not found`);
        return;
    }

    if (!Array.isArray(items)) {
        console.error("Invalid 'items' array provided");
        return;
    }

    // Store original skills for filtering
    window.allSkills = items;

    const groupedSkills = items.reduce((acc, item) => {
        if (!acc[item.title]) {
            acc[item.title] = [];
        }
        acc[item.title].push(item);
        return acc;
    }, {});

    Object.entries(groupedSkills).forEach(([title, skills]) => {
        if (title.trim()) {
            const titleH4 = getElement("h4", "section-title");
            const icon = getIconForTitle(title);
            titleH4.innerHTML = `<i class="fa ${icon}"></i>&emsp;${title}`;
            
            const sectionId = `${title.trim().toLowerCase().replace(/\s+/g, '-')}-skills`;
            const titleDiv = getElement("div", "col-md-12 animate-box");
            titleDiv.setAttribute("id", sectionId); // Assign id to section
            titleDiv.append(titleH4);
            skillsTag.append(titleDiv);

            skills.forEach(({ skillName, color, percentage, category }) => {
                const h3 = getElement("h3", null);
                h3.innerHTML = skillName;

                const divProgress = getElement("div", "progress");
                const divProgressBar = getElement("div", `progress-bar ${color}`);
                divProgressBar.style.width = `${percentage}%`;
                divProgress.append(divProgressBar);

                const divProgressWrap = getElement("div", "progress-wrap");
                divProgressWrap.append(h3, divProgress);

                const divAnimateBox = getElement("div", "col-md-6 animate-box");
                divAnimateBox.setAttribute("data-category", category || "all");
                divAnimateBox.setAttribute("data-section-id", sectionId);
                divAnimateBox.append(divProgressWrap);

                skillsTag.append(divAnimateBox);
            });
        }
    });
}

// Skill filtering functionality
function filterSkills(category) {
    const skillItems = document.querySelectorAll('#skills .col-md-6.animate-box');
    const sectionHeaders = document.querySelectorAll('#skills .col-md-12.animate-box');
    
    // Track which sections have visible skills by their ID
    const visibleSectionIds = new Set();
    
    skillItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
            item.classList.add('fade-in');
            
            // Get the section ID from the data attribute
            const sectionId = item.getAttribute('data-section-id');
            if (sectionId) {
                visibleSectionIds.add(sectionId);
            }
        } else {
            item.style.display = 'none';
            item.classList.remove('fade-in');
        }
    });
    
    // Show/hide section headers based on whether they have visible skills
    sectionHeaders.forEach(header => {
        const sectionId = header.id;
        if (visibleSectionIds.has(sectionId)) {
            header.style.display = 'block';
        } else {
            header.style.display = 'none';
        }
    });
    
    // Update active filter button
    const filterButtons = document.querySelectorAll('.skill-filters .filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });
}

// Initialize skill filtering
function initializeSkillFiltering() {
    const filterButtons = document.querySelectorAll('.skill-filters .filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-filter');
            filterSkills(category);
        });
    });
}






  // Helper function to return appropriate icon for each section
function getIconForTitle(title) {
    const titleLower = title.toLowerCase();
    switch(titleLower) {
        
        case 'rag frameworks':
            return 'fa-layer-group';
        case 'ml frameworks':
            return 'fa-layer-group';
        case 'databases':
            return 'fa-layer-group';
        case 'mlops tools':
            return 'fa-code';
        case 'cloud platforms':
            return 'fa-code';
        case 'programming languages':
            return 'fa-code';    
        case 'databases':
            return 'fa-code';
        case 'scientific & engineering tools':
            return 'fa-code';
        case 'languages':
            return 'fa-code';
        default:
            return 'fa-star'; // default icon
    }
  }


// Select all subsection links
const skillLinks = document.querySelectorAll('#skills-subsections li a');

// Add event listener to each link
skillLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove the 'active' class from all links
        skillLinks.forEach(link => link.classList.remove('active'));
        
        // Add the 'active' class to the clicked link
        this.classList.add('active');
    });
});


  
  /**
   * Populates projects to the HTML page with modern card design.
   *
   * @function
   *
   * @param {Array} items - An array of objects that contain project information.
   * @param {string} id - The id of the HTML element to which projects will be appended.
   * @param {string} category - The category of projects (ai, web, software, physics).
   *
   * @returns {void}
   */
  
  function populateProjects(items, id, category) {
    let projectContainer = document.getElementById(id);
  
    // Clear existing projects in case this is called multiple times
    projectContainer.innerHTML = "";
  
    for (let i = 0; i < items.length; i++) {
      // Create the main project card
      let projectCard = document.createElement("div");
      projectCard.className = "project-card";
      projectCard.setAttribute("data-category", category);
      
      // Create project image container
      let projectImage = document.createElement("div");
      projectImage.className = "project-image";
      
      let img = document.createElement("img");
      img.src = items[i].image;
      img.alt = items[i].projectName;
      
      // Create overlay for hover effect
      let projectOverlay = document.createElement("div");
      projectOverlay.className = "project-overlay";
      
      let overlayContent = document.createElement("div");
      overlayContent.className = "overlay-content";
      
      // Project title in overlay
      let overlayTitle = document.createElement("div");
      overlayTitle.className = "project-title";
      overlayTitle.textContent = items[i].projectName;
      
      // Project description in overlay
      let overlayDescription = document.createElement("div");
      overlayDescription.className = "project-description";
      overlayDescription.textContent = items[i].summary;
      
      // Tech stack in overlay
      let overlayTechStack = document.createElement("div");
      overlayTechStack.className = "tech-stack";
      
      // Add tech stack tags
      items[i].techStack.forEach(tech => {
        let techTag = document.createElement("span");
        techTag.className = "tech-tag";
        techTag.textContent = tech;
        overlayTechStack.append(techTag);
      });
      
      // View project button
      let viewProjectBtn = document.createElement("a");
      viewProjectBtn.className = "view-project-btn";
      viewProjectBtn.href = items[i].preview;
      viewProjectBtn.target = "_blank";
      viewProjectBtn.rel = "noopener noreferrer";
      
      let btnIcon = document.createElement("i");
      btnIcon.className = "fa fa-external-link";
      
      let btnText = document.createElement("span");
      btnText.textContent = "View Project";
      
      viewProjectBtn.append(btnIcon);
      viewProjectBtn.append(btnText);
      
      overlayContent.append(overlayTitle);
      overlayContent.append(overlayDescription);
      overlayContent.append(overlayTechStack);
      overlayContent.append(viewProjectBtn);
      projectOverlay.append(overlayContent);
      
      projectImage.append(img);
      projectImage.append(projectOverlay);
      
      // Create project content
      let projectContent = document.createElement("div");
      projectContent.className = "project-content";
      
      // Project title
      let projectTitle = document.createElement("h3");
      projectTitle.className = "project-title";
      projectTitle.textContent = items[i].projectName;
      
      // Project description
      let projectDescription = document.createElement("p");
      projectDescription.className = "project-description";
      projectDescription.textContent = items[i].summary;
      
      // Tech stack tags
      let techStack = document.createElement("div");
      techStack.className = "tech-stack";
      
      for (let k = 0; k < items[i].techStack.length; k++) {
        let techTag = document.createElement("span");
        techTag.className = "tech-tag";
        techTag.textContent = items[i].techStack[k];
        techStack.append(techTag);
      }
      
      // Project actions
      let projectActions = document.createElement("div");
      projectActions.className = "project-actions";
      
      // Project link
      let projectLink = document.createElement("a");
      projectLink.className = "project-link";
      projectLink.href = items[i].preview;
      projectLink.target = "_blank";
      projectLink.rel = "noopener noreferrer";
      
      let linkIcon = document.createElement("i");
      linkIcon.className = "fa fa-external-link";
      
      let linkText = document.createElement("span");
      linkText.textContent = "View Project";
      
      projectLink.append(linkIcon);
      projectLink.append(linkText);
      
      // Project stats (optional - can be customized)
      let projectStats = document.createElement("div");
      projectStats.className = "project-stats";
      
      let statItem = document.createElement("div");
      statItem.className = "stat-item";
      
      let statIcon = document.createElement("i");
      statIcon.className = "fa fa-code";
      
      let statText = document.createElement("span");
      statText.textContent = "Full Stack";
      
      statItem.append(statIcon);
      statItem.append(statText);
      projectStats.append(statItem);
      
      projectActions.append(projectLink);
      projectActions.append(projectStats);
      
      // Assemble the project content
      projectContent.append(projectTitle);
      projectContent.append(projectDescription);
      projectContent.append(techStack);
      projectContent.append(projectActions);
      
      // Assemble the project card
      projectCard.append(projectImage);
      projectCard.append(projectContent);
      
      // Add click handler to the entire card
      projectCard.addEventListener('click', function(e) {
        // Only trigger if not clicking on the link itself
        if (!e.target.closest('.project-link')) {
          window.open(items[i].preview, '_blank', 'noopener,noreferrer');
        }
      });
      
      // Add cursor pointer to indicate clickability
      projectCard.style.cursor = 'pointer';
      
      // Add the project card to the container
      projectContainer.append(projectCard);
    }
  }

  /**
   * Initialize project filtering functionality
   */
  function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCategories = document.querySelectorAll('.project-category');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        // Show/hide project categories based on filter
        projectCategories.forEach(category => {
          if (filter === 'all') {
            category.classList.remove('hidden');
          } else {
            const categoryId = category.getAttribute('id');
            if (categoryId === `${filter}-projects`) {
              category.classList.remove('hidden');
            } else {
              category.classList.add('hidden');
            }
          }
        });
      });
    });
  }
  


  /**
   * Creates and populates a list of blog posts with specified properties
   *
   * @function
   *
   * @param {Array} items - An array of objects, each representing a blog post
   * @param {string} id - The ID of the parent element where the list of posts will be appended
   *
   * @returns {undefined}
   */
  
  function populateBlogs(items, id) {
    const projectdesign = document.getElementById(id);
    const count = 3;
    
  
    for (let i = 0; i < count; i++) {
      // Create the main blog card
      const blogCard = document.createElement("a");
      blogCard.className = "blog-card";
      blogCard.href = items[i].link;
      blogCard.target = "_blank";
      blogCard.rel = "noopener noreferrer";
      
      // Create blog content container
      const blogContent = document.createElement("div");
      blogContent.className = "blog-content";
      
      // Create blog title
      const blogTitle = document.createElement("h3");
      blogTitle.className = "project-heading";
      blogTitle.innerHTML = items[i].title;
      
      // Create publish date
      const pubDateEle = document.createElement('p');
      pubDateEle.className = 'publish-date';
      pubDateEle.innerHTML = getBlogDate(items[i].pubDate);
      
      // Create blog description
      const blogDescription = document.createElement("p");
      blogDescription.className = "project-description";
      
      
      const html = items[i].content;
      const descriptionField = items[i].description;
      
      // Extract description from content - try multiple patterns
      let description = "";
      
      // First try the description field if it exists
      if (descriptionField && descriptionField.trim()) {
        description = descriptionField.trim();
        // Clean up HTML tags from description field too
        description = description
          .replace(/<[^>]*>/g, '') // Remove HTML tags
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&nbsp;/g, ' ')
          .replace(/\s+/g, ' ') // Replace multiple spaces with single space
          .trim();
      } else if (html) {
        // Try to get the first paragraph with better regex
        const firstParagraphMatch = /<p[^>]*>([^<]*(?:<[^>]+>[^<]*)*?)<\/p>/i.exec(html);
        if (firstParagraphMatch && firstParagraphMatch[1]) {
          description = firstParagraphMatch[1];
        } else {
          // Try alternative patterns for different HTML structures
          const altPatterns = [
            /<p[^>]*>(.*?)<\/p>/i,
            /<div[^>]*>(.*?)<\/div>/i,
            /<span[^>]*>(.*?)<\/span>/i
          ];
          
          for (const pattern of altPatterns) {
            const match = pattern.exec(html);
            if (match && match[1] && match[1].trim().length > 20) {
              description = match[1];
              break;
            }
          }
        }
        
        // Clean up HTML tags and decode entities
        description = description
          .replace(/<[^>]*>/g, '') // Remove HTML tags
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&nbsp;/g, ' ')
          .replace(/\s+/g, ' ') // Replace multiple spaces with single space
          .trim();
      }
      
      // If still no description, create a generic one based on title
      if (!description || description.length < 10) {
        const title = items[i].title || "This article";
        description = `Explore ${title.toLowerCase()} and discover valuable insights, technical knowledge, and practical solutions in this comprehensive Medium article.`;
      }
      
      
      // Limit description length - show more of the first paragraph
      if (description.length > 300) {
        // Find a good breaking point (end of sentence or word)
        let truncated = description.substring(0, 300);
        const lastSentence = truncated.lastIndexOf('.');
        const lastWord = truncated.lastIndexOf(' ');
        
        if (lastSentence > 200) {
          description = truncated.substring(0, lastSentence + 1);
        } else if (lastWord > 150) {
          description = truncated.substring(0, lastWord) + "...";
        } else {
          description = truncated + "...";
        }
      }
      
      blogDescription.innerHTML = description;
      
      // Create tags container
      const tagsContainer = document.createElement("div");
      tagsContainer.className = "tech-stack";
      
      // Add category tags
      for (const category of items[i].categories) {
        const tag = document.createElement("span");
        tag.className = "tech-tag";
        tag.innerHTML = category;
        tagsContainer.append(tag);
      }
      
      // Assemble the blog content
      blogContent.append(blogTitle);
      blogContent.append(pubDateEle);
      blogContent.append(blogDescription);
      blogContent.append(tagsContainer);
      
      
      // Assemble the blog card
      blogCard.append(blogContent);
      
      // Create list item and append
      const li = document.createElement("li");
      li.append(blogCard);
      projectdesign.append(li);
    }
  }
  
  /**
   * Populate the HTML timeline with items.
   * @param {Array} items - An array of objects that represent the timeline items.
   * @param {string} id - The id of the main container element in the HTML.
   * @property {string} items[].subtitle - The subtitle of the timeline item.
   * @property {string} items[].duration - The duration of the timeline item.
   * @property {string} items[].title - The title of the timeline item.
   * @property {Array} items[].details - An array of details for the timeline item.
   * @property {Array} items[].tags - An array of tags for the timeline item.
   * @property {string} items[].icon - The name of the font awesome icon to use.
   */
  function populateCert(items, id) {
    let mainContainer = document.getElementById(id);

    for (let i = 0; i < items.length; i++) {
        let h2TimelineLabel = document.createElement("h2");
        h2TimelineLabel.innerHTML = items[i].title;

        let spanh2 = document.createElement("span");
        spanh2.innerHTML = items[i].duration;

        // Apply the styles directly to spanh2
      
        spanh2.style.fontWeight = "700";
        spanh2.style.fontSize = "14px";
        spanh2.style.marginLeft = "0px";

        // Wrap title and duration in a container
        let divTitleDuration = document.createElement("div");
        divTitleDuration.append(h2TimelineLabel);
        divTitleDuration.append(spanh2);

        let divTimelineLabel = document.createElement("div");
        divTimelineLabel.className = "timeline-label";
        divTimelineLabel.append(divTitleDuration);

        let divTags = document.createElement("div");
        for (let j = 0; j < items[i].tags.length; j++) {
            let spanTags = document.createElement("span");
            spanTags.className = "badge badge-secondary";
            spanTags.innerHTML = items[i].tags[j];
            divTags.append(spanTags);
        }
        divTimelineLabel.append(divTags);

        let iFa = document.createElement("i");
        iFa.className = "fa fa-" + items[i].icon;

        let divTimelineIcon = document.createElement("div");
        divTimelineIcon.className = "timeline-icon color-2";
        divTimelineIcon.append(iFa);

        let divTimelineEntryInner = document.createElement("div");
        divTimelineEntryInner.className = "timeline-entry-inner";
        divTimelineEntryInner.append(divTimelineIcon);
        divTimelineEntryInner.append(divTimelineLabel);

        let article = document.createElement("article");
        article.className = "timeline-entry animate-box";
        article.append(divTimelineEntryInner);

        mainContainer.append(article);
    }
}

  
  /**
   * Populate the HTML timeline with items.
   * @param {Array} items - An array of objects that represent the timeline items.
   * @param {string} id - The id of the main container element in the HTML.
   * @property {string} items[].subtitle - The subtitle of the timeline item.
   * @property {string} items[].duration - The duration of the timeline item.
   * @property {string} items[].title - The title of the timeline item.
   * @property {Array} items[].details - An array of details for the timeline item.
   * @property {Array} items[].tags - An array of tags for the timeline item.
   * @property {string} items[].icon - The name of the font awesome icon to use.
   */
  function populateExp_Edu(items, id) {
    let mainContainer = document.getElementById(id);

    for (let i = 0; i < items.length; i++) {
        let spanTimelineSublabel = document.createElement("span");
        spanTimelineSublabel.className = "timeline-sublabel";
        spanTimelineSublabel.innerHTML = items[i].subtitle;

        let spanh2 = document.createElement("span");
        spanh2.className = "timeline-duration";
        spanh2.innerHTML = items[i].duration;

        // Create a wrapper for subtitle and duration
        let divSubtitleDuration = document.createElement("div");
        divSubtitleDuration.className = "subtitle-duration-wrapper";
        divSubtitleDuration.append(spanTimelineSublabel);
        divSubtitleDuration.append(spanh2);

        let h2TimelineLabel = document.createElement("h2");
        h2TimelineLabel.innerHTML = items[i].title;
        h2TimelineLabel.append(divSubtitleDuration); // Append the wrapper

        let divTimelineLabel = document.createElement("div");
        divTimelineLabel.className = "timeline-label";
        divTimelineLabel.append(h2TimelineLabel);

        for (let j = 0; j < items[i].details.length; j++) {
            let pTimelineText = document.createElement("p");
            pTimelineText.className = "timeline-text";
            pTimelineText.innerHTML = items[i].details[j]; // Remove the bullet point as we're using CSS ::before
            divTimelineLabel.append(pTimelineText);
        }

        let divTags = document.createElement("div");
        for (let j = 0; j < items[i].tags.length; j++) {
            let spanTags = document.createElement("span");
            spanTags.className = "badge badge-secondary";
            spanTags.innerHTML = items[i].tags[j];
            divTags.append(spanTags);
        }
        divTimelineLabel.append(divTags);

        let iFa = document.createElement("i");
        iFa.className = "fa fa-" + items[i].icon;

        let divTimelineIcon = document.createElement("div");
        divTimelineIcon.className = "timeline-icon color-2";
        divTimelineIcon.append(iFa);

        let divTimelineEntryInner = document.createElement("div");
        divTimelineEntryInner.className = "timeline-entry-inner";
        divTimelineEntryInner.append(divTimelineIcon);
        divTimelineEntryInner.append(divTimelineLabel);

        let article = document.createElement("article");
        article.className = "timeline-entry animate-box";
        article.append(divTimelineEntryInner);

        // Add click event for interactive timeline entries
        article.addEventListener('click', function() {
            // Toggle a 'selected' class for visual feedback
            this.classList.toggle('selected');
        });

        mainContainer.append(article);
    }

}

  
  /**
   * Populate links in the specified footer section with provided data.
   *
   * @param {Array} items - Array of objects containing data for links
   * @param {String} id - Id of the footer section in which the links will be populated
   *
   * @return {undefined}
   */
  function populateLinks(items, id) {
    let footer = document.getElementById(id);

    items.forEach(function (item) {
        if (item.label !== "copyright-text") {
            let span = document.createElement("span");
            span.className = "col";

            // Create a nav element to hold the social media links
            let nav = document.createElement("nav");
            nav.className = "col-list";

            let ul = document.createElement("ul");

            // Loop through the data to create links with icons
            item.data.forEach(function (data) {
                let li = document.createElement("li");

                // Create an anchor tag for each link
                let a = document.createElement("a");
                if (data.link) {
                    a.href = data.link;
                    a.target = "_blank";
                }
                if (data.func) {
                    a.setAttribute("onclick", data.func);
                }

                // Create an icon using Font Awesome classes
                let i = document.createElement("i");
                i.className = "fa-brands " + data.icon; // Use data.icon to apply the icon class

                // Create a span for the text next to the icon
                let spanText = document.createElement("span");
                spanText.className = "social-name";
                spanText.innerHTML = data.text;  // The name of the social media platform

                // Append the icon and text to the anchor tag
                a.append(i);
                a.append(spanText);

                li.append(a);
                ul.append(li);
            });

            nav.append(ul);
            span.append(nav);
            footer.append(span);
        }

        if (item.label === "copyright-text") {
            let div = document.createElement("div");
            div.className = "copyright-text no-print";
            item.data.forEach(function (copyright) {
                let p = document.createElement("p");
                p.innerHTML = copyright;
                div.append(p);
            });
            footer.append(div);
        }
    });
}

  
  /**
   * Creates a new element with specified tag name and class name.
   *
   * @param {string} tagName - The tag name of the element.
   * @param {string} className - The class name of the element.
   *
   * @return {HTMLElement} The newly created element.
   */
  function getElement(tagName, className) {
    let item = document.createElement(tagName);
    item.className = className;
    return item;
  }

  function getBlogDate(publishDate) {
    const elapsed = Date.now() - Date.parse(publishDate);
  
    // Time conversions in milliseconds
    const msPerSecond = 1000;
    const msPerMinute = msPerSecond * 60;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
  
    if (elapsed < msPerMinute) {
      const seconds = Math.floor(elapsed / msPerSecond);
      return `${seconds} seconds ago`;
    } else if (elapsed < msPerHour) {
      const minutes = Math.floor(elapsed / msPerMinute);
      return `${minutes} minutes ago`;
    } else if (elapsed < msPerDay) {
      const hours = Math.floor(elapsed / msPerHour);
      return `${hours} hours ago`;
    } else if (elapsed < msPerMonth) {
      const days = Math.floor(elapsed / msPerDay);
      return (days == 1) ? `${days} day ago` : `${days} days ago`;
    } else if (elapsed < msPerYear) {
      const months = Math.floor(elapsed / msPerMonth);
      return (months == 1) ? `${months} month ago` : `${months} months ago`;
    } else {
      const years = Math.floor(elapsed / msPerYear);
      return (years == 1) ? `${years} year ago` : `${years} years ago`;
    }
  }
  
  populateBio(bio, "bio");
  
  populateSkills(skills, "skills");
  
  // Initialize skill filtering after skills are populated
  setTimeout(() => {
    initializeSkillFiltering();
  }, 100);
  
  // Try to fetch blogs from Medium, with fallback
  fetchBlogsFromMedium(medium).catch(() => {
    // Fallback: Show sample blog data for testing
    const sampleBlogs = [
      {
        title: "Getting Started with AI and Machine Learning",
        link: "https://medium.com/@razgaleh/sample-blog-1",
        pubDate: new Date().toISOString(),
        content: "<p>Artificial Intelligence and Machine Learning are transforming industries across the globe at an unprecedented pace. From healthcare and finance to transportation and entertainment, these technologies are reshaping how we work, live, and interact with the world around us. In this comprehensive guide, we'll explore the fundamentals of AI/ML, practical applications across various sectors, and emerging trends that are shaping the future of technology. Whether you're a complete beginner or looking to deepen your understanding, this article will provide valuable insights into the fascinating world of artificial intelligence.</p>",
        categories: ["AI", "Machine Learning", "Technology"]
      },
      {
        title: "Building Scalable Web Applications with Modern Frameworks",
        link: "https://medium.com/@razgaleh/sample-blog-2", 
        pubDate: new Date(Date.now() - 86400000).toISOString(),
        content: "<p>In today's fast-paced digital landscape, building web applications that can handle millions of users while maintaining performance and reliability is crucial for success. Modern JavaScript frameworks like React, Vue.js, and Angular have revolutionized the way we approach frontend development, offering powerful tools and patterns that make it easier to create complex, interactive user interfaces. This comprehensive guide will walk you through the essential concepts, best practices, and advanced techniques needed to build scalable web applications that can grow with your business needs.</p>",
        categories: ["Web Development", "JavaScript", "Frameworks"]
      },
      {
        title: "Data Science and Analytics: A Complete Guide",
        link: "https://medium.com/@razgaleh/sample-blog-3",
        pubDate: new Date(Date.now() - 172800000).toISOString(),
        content: "<p>Data has become the new oil of the digital economy, and organizations that can effectively collect, analyze, and derive insights from their data are gaining significant competitive advantages. Data science combines statistical analysis, machine learning, and domain expertise to extract meaningful patterns and predictions from complex datasets. In this comprehensive guide, we'll explore the entire data science pipeline, from data collection and cleaning to advanced modeling and visualization techniques that help businesses make data-driven decisions.</p>",
        categories: ["Data Science", "Analytics", "Python"]
      }
    ];
    populateBlogs(sampleBlogs, "blogs");
  });
  
  fetchGitConnectedData(gitConnected);
  
  populateProjects(mlaiProjects, "ml-ai-projects", "ai");
  populateProjects(webProjects, "web-projects-container", "web");
  populateProjects(softwareProjects, "software-projects-container", "software");
  populateProjects(physicsProjects, "physics-projects-container", "physics");
  
  // Initialize project filtering
  initializeProjectFilters();
  
  populateCert(certs, "certs");
  populateExp_Edu(experience, "experience");
  populateExp_Edu(education, "education");
  
  populateLinks(footer, "footer");
  


