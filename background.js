function bird2doge() {
    const twitterButton = document.querySelector('[aria-label="Twitter"]');
    if (twitterButton) {
        const svgElement = twitterButton.querySelector('svg');
        const parentElement = svgElement.parentElement;

        const imgElement = document.createElement('img');
        imgElement.setAttribute("width", "32");
        imgElement.setAttribute("hight", "32");
        imgElement.setAttribute("src",
        "data:image/png;base64,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"
        );
        parentElement.insertBefore(imgElement, svgElement);
        parentElement.removeChild(svgElement);
        return true;
    }
    return false;
  }
  
  function observeDOMChange() {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          if (bird2doge()) {
            observer.disconnect();
            break;
          }
        }
      }
    });
  
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
  
  if (!bird2doge()) {
    observeDOMChange();
  }