const parameterKey = "wt_mc_id";
const parameterValue = "AZ-MVP-5005297";
const targetDomain = "learn.microsoft.com";

// Function to append the URL parameter
function appendParameterToLinks() {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    const url = new URL(link.href);
    if (url.hostname.includes(targetDomain) && !url.searchParams.has(parameterKey)) {
      url.searchParams.set(parameterKey, parameterValue);
      link.href = url.toString();
    }
  });
}

// Run the function when the content script loads
appendParameterToLinks();
