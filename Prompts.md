# Prompts Used

This document outlines the main prompts and AI interactions utilized during the development of Cine-Stream.

1. **Styling Direction (Implementation Phase):**
   ```text
   Keep design very simple, light theme, the website should look like humanoid, no ai uses marks, use less emojies like humans not like ai
   ```
   *Purpose:* This prompt guided the CSS architecture to utilize soft, clean colors (`#fcfcfc`, `#ffffff`), subtle borders (`#e2e8f0`), and standard humanist typography (Inter, Sans-serif) instead of a dark "Netflix-clone" theme or robotic aesthetic.

3. **Performance Optimization Guidance:**
   *Infinite Scroll Prompt Example:* "How do I implement infinite scroll in React without external libraries?" -> Led to the `IntersectionObserver` callback implementation in `Home.jsx` attached to a bottom `div` ref.
   *Debouncing Prompt Example:* "How to create a custom debounce hook in React?" -> Led to the `useDebounce.js` hook utilizing `setTimeout` and cleanup `clearTimeout` to prevent excessive TMDB Search API calls.
