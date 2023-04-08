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