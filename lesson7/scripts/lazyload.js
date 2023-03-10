const imagesToLoad = document.querySelectorAll("img[data-src]");
const imgOptions = {
    threshold: .5,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImages(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });

  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

