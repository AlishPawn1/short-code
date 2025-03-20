if (document.querySelector('.term-description')) {
    let visibleParagraphs = 3; // Define how many paragraphs to show
    let maxCharLimit = 300; // Define character limit

    /*Dynamically Add readmore-copy In content*/
    document.querySelectorAll(".term-description").forEach(function (wrapper) {
        if (!wrapper.querySelector(".readmore-copy")) {
            let children = Array.from(wrapper.children);
            let totalTextLength = 0;
            let visibleContent = [];
            let hiddenContent = [];

            for (let i = 0; i < children.length; i++) {
                let para = children[i];
                let paraText = para.innerHTML.trim();
                totalTextLength += paraText.length;

                if (visibleContent.length < visibleParagraphs || totalTextLength <= maxCharLimit) {
                    visibleContent.push(para);
                } else {
                    hiddenContent.push(para);
                }
            }

            if (hiddenContent.length > 0) {
                let wrapDiv = document.createElement("div");
                wrapDiv.className = "readmore-copy";
                hiddenContent.forEach(el => wrapDiv.append(el));
                wrapper.append(wrapDiv);
            }
        }
    });


    /*Togggle Read More*/
    document.querySelectorAll(".readmore-copy").forEach(function (el) {
        el.style.display = "none";

        let toggleWrapper = document.createElement("div");
        toggleWrapper.className = "readmore-wrapper";

        let toggleBtn = document.createElement("a");
        toggleBtn.className = "read-more closed";
        toggleBtn.innerHTML = `Read <span class="read-status">more</span> 
<span class="caron">
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1875 7.75C15.1875 8.24219 14.8008 8.59375 14.3438 8.59375H8.71875V14.2188C8.71875 14.7109 8.33203 15.0977 7.875 15.0977C7.38281 15.0977 7.03125 14.7109 7.03125 14.2188V8.59375H1.40625C0.914062 8.59375 0.5625 8.24219 0.5625 7.78516C0.5625 7.29297 0.914062 6.90625 1.40625 6.90625H7.03125V1.28125C7.03125 0.824219 7.38281 0.472656 7.875 0.472656C8.33203 0.472656 8.71875 0.824219 8.71875 1.28125V6.90625H14.3438C14.8008 6.90625 15.1875 7.29297 15.1875 7.75Z" fill="black"/>
</svg>
</span>`;

        toggleWrapper.appendChild(toggleBtn);
        el.after(toggleWrapper);

        toggleBtn.addEventListener("click", function () {
            let content = this.closest(".readmore-wrapper").previousElementSibling;

            if (content.style.display === "none") {
                content.style.display = "block";
                this.classList.remove("closed");
                this.querySelector(".read-status").textContent = "less";
                this.querySelector(".caron").innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15 7C15.5523 7 16 7.44772 16 8C16 8.51284 15.614 8.93551 15.1166 8.99327L15 9H1C0.447715 9 0 8.55228 0 8C0 7.48716 0.38604 7.06449 0.883379 7.00673L1 7H15Z" fill="black"/>
                                                        </svg>
                                                        `;
            } else {
                content.style.display = "none";
                this.classList.add("closed");
                this.querySelector(".read-status").textContent = "more";
                this.querySelector(".caron").innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1875 7.75C15.1875 8.24219 14.8008 8.59375 14.3438 8.59375H8.71875V14.2188C8.71875 14.7109 8.33203 15.0977 7.875 15.0977C7.38281 15.0977 7.03125 14.7109 7.03125 14.2188V8.59375H1.40625C0.914062 8.59375 0.5625 8.24219 0.5625 7.78516C0.5625 7.29297 0.914062 6.90625 1.40625 6.90625H7.03125V1.28125C7.03125 0.824219 7.38281 0.472656 7.875 0.472656C8.33203 0.472656 8.71875 0.824219 8.71875 1.28125V6.90625H14.3438C14.8008 6.90625 15.1875 7.29297 15.1875 7.75Z" fill="black"/>
</svg>`;
            }
        });
    });
}