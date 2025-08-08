const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    category: "IT",
    location: "Chennai",
    description: "Build responsive websites with modern UI.",
  },
  {
    id: 2,
    title: "Marketing Executive",
    category: "Marketing",
    location: "Mumbai",
    description: "Handle campaigns and digital reach.",
  },
  {
    id: 3,
    title: "HR Manager",
    category: "HR",
    location: "Chennai",
    description: "Manage recruitment, payroll, and team engagement.",
  },
  {
    id: 4,
    title: "Backend Developer",
    category: "IT",
    location: "Bangalore",
    description: "Develop scalable backend services and APIs.",
  },
  {
    id: 5,
    title: "Finance Analyst",
    category: "Finance",
    location: "Mumbai",
    description: "Analyze budgets, prepare reports, and advise on investments.",
  },
  {
    id: 6,
    title: "Social Media Manager",
    category: "Marketing",
    location: "Delhi",
    description: "Manage company’s social media presence.",
  },
  {
    id: 7,
    title: "IT Support Engineer",
    category: "IT",
    location: "Hyderabad",
    description: "Provide IT support and system troubleshooting.",
  },
  {
    id: 8,
    title: "Recruitment Specialist",
    category: "HR",
    location: "Kolkata",
    description: "Screen resumes, schedule interviews, and onboard candidates.",
  }
];

// Render all jobs or filtered jobs
function renderJobs(jobs) {
  const jobList = document.getElementById("jobList");
  jobList.innerHTML = "";

  jobs.forEach(job => {
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";

    jobCard.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Category:</strong> ${job.category}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p>${job.description}</p>
      <div class="card-actions">
        <button onclick="saveJob(${job.id})">Save Job</button>
        <a href="job-details.html?id=${job.id}" class="view-details-btn">View Details</a>
      </div>
    `;

    jobList.appendChild(jobCard);
  });
}

// Save job to localStorage
function saveJob(id) {
  const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
  if (!savedJobs.includes(id)) {
    savedJobs.push(id);
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    alert("Job saved!");
  } else {
    alert("Job already saved.");
  }
}

// Apply filters
function applyFilters() {
  const category = document.getElementById("categoryFilter")?.value;
  const location = document.getElementById("locationFilter")?.value;

  const filtered = jobData.filter(job => {
    const matchesCategory = !category || job.category === category;
    const matchesLocation = !location || job.location === location;
    return matchesCategory && matchesLocation;
  });

  renderJobs(filtered);
}

// Auto-filter by category from URL (like jobs.html?category=IT)
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const selectedCategory = params.get("category");

  if (selectedCategory && document.getElementById("categoryFilter")) {
    document.getElementById("categoryFilter").value = selectedCategory;
    applyFilters();
  } else {
    renderJobs(jobData);
  }
};

// Event listeners for dropdown filters
document.getElementById("categoryFilter")?.addEventListener("change", applyFilters);
document.getElementById("locationFilter")?.addEventListener("change", applyFilters);
