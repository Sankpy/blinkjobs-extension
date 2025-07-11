# blinkjobs-extension
# BlinkJobs – A Chrome Extension for Fresh Job & Hiring Post Searches on LinkedIn

## 🧩 Problem

When you're actively job hunting, timing matters.  
LinkedIn job postings and hiring-related posts often get buried quickly — and if you’re not checking often or filtering correctly, you can easily miss opportunities posted in the **last 1 hour**.

LinkedIn does allow filtering by "Past 24 hours", but:
- You still need to apply filters manually every time
- There's no way to directly search **hiring-related posts**, just jobs
- The experience is slower than it should be for someone who’s checking frequently

## 💡 What This Extension Does

**BlinkJobs** is a lightweight Chrome extension designed to:
- Let you search **LinkedIn job listings** posted within the last hour
- Search for **LinkedIn posts** containing hiring keywords (e.g., "we're hiring", "looking for a data analyst") — posted recently
- Do it all with **one click**, no need to manually apply filters each time

You simply enter a **job title** or **post keyword**, and the extension opens the correct LinkedIn search pages for you with relevant filters.

## 🔧 How It Works

- It modifies the LinkedIn job search URL with `f_TPR=r3600` → which filters for posts from the **last 3600 seconds (1 hour)**
- For post search, it triggers a LinkedIn content search with your keyword
- No backend, no scraping — just front-end URL logic for now

## 🛠 Installation

1. Download or clone this repo
2. Go to `chrome://extensions` in your browser
3. Turn on **Developer Mode**
4. Click **Load unpacked**
5. Select this folder

## 🧠 Future Ideas

This is a basic first version. Ideas for expansion:

- Add **auto-refresh** every 30 mins to catch newest posts
- Scrape and store **posting time**, build a dataset
- Add **notifications** for new posts matching saved roles
- Show trends: which roles get posted more frequently, and when
- Filter **recruiter-only posts** or **company-only jobs**
- Turn into a minimal job assistant with AI-based post scoring

## 🚧 Notes

This is an early-stage project. Built for learning, testing, and exploration.  
If you’ve experienced the same pain point in job search — I’d love to hear your feedback.

---

Built with simple HTML/CSS/JS — and a bit of curiosity.
