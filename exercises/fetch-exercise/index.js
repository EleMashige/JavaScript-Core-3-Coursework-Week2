let rootEl = document.getElementById("root");
      let randomizeDogButton = document.createElement("button");
      let ul = document.createElement("ul");

      randomizeDogButton.addEventListener("click", getRandomDogImageFromApi);

      function getRandomDogImageFromApi() {
        fetchingDogImg().catch((error) => {
          console.log(error.message);
          console.log("request failed");
        });

        async function fetchingDogImg() {
          const response = await fetch(
            "https://dog.ceo/api/breeds/image/random"
          );
          if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
          }
          const imgObj = await response.json();
          let li = document.createElement("li");
          let fetchedImg = document.createElement("img");
          fetchedImg.src = imgObj.message;
          fetchedImg.style.width = "300px";
          fetchedImg.style.height = "300px";

          li.appendChild(fetchedImg);
          ul.appendChild(li);
          // console.log(imgObj);
          return imgObj;
        }
      }

      rootEl.appendChild(randomizeDogButton);
      rootEl.appendChild(ul);

      randomizeDogButton.style.width = "150px";
      randomizeDogButton.style.height = "50px";