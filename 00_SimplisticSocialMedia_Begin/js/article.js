/**
 * Create a class called Article - This class will represent a blog article to be published on our website.
 * 
 * The class should have the following properties:
 * > title - The title of the article
 * > intro - A short introduction to the article
 * > backgroundImage - A URL to a background image to be used with the article
 * > datePublished - The date the article was published
 * > author - The author of the article
 * > categories - An array of categories the article belongs to
 * > body - The main body of the article
 * > conclusion - A conclusion to the article
 * > comments - An array of comments on the article
 * > likes - The number of likes the article has received
 * > dislikes - The number of dislikes the article has received
 * > isPublished - A boolean indicating whether or not the article has been published
 * 
 * 
 * The class should have the following methods:
 * > publish() - This method should set the isPublished property to true
 * > edit() - This method should allow the user to edit the article
 * > unpublish() - This method should set the isPublished property to false
 * > like() - This method should increment the likes property by 1
 * > dislike() - This method should increment the dislikes property by 1
 * > addComment() - This method should add a comment to the comments array
 * > removeComment() - This method should remove a comment from the comments array
 * > editComment() - This method should edit a comment in the comments array
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
 */
class Article {
    /**
     * TODO:
     * 
     * > Create the constructor method and add the following parameters to the constructor:
     * 
     * @param { string } title 
     * @param { string } intro 
     * @param { URL } backgroundImage 
     * @param { Date } datePublished 
     * @param { string } author 
     * @param { array } categories 
     * @param { string } body 
     * @param { string } conclusion 
     * @param { array } comments 
     * @param { number } likes 
     * @param { number } dislikes 
     * @param { boolean } isPublished 
     */
    ///////////////////////// YOUR CODE STARTS HERE  (Feel free to add more lines to below this comment)//////////////////////////////

    constructor( title, intro, backgroundImage, datePublished, author, catergories, body, conclusion ) {
        this.title = title;
        this.intro = intro;
        this.backgroundImage = backgroundImage;
        this.datePublished = datePublished;
        this.author = author;
        this.categories = catergories;
        this.body = body;
        this.conclusion = conclusion;

        // This is an automatic variable to be controlled by the prpgram
        // and not the author.
        this.isPublished = false;
        
        // These parameters are optional
        this.comments = "";
        this.likes = 0;
        this.dislikes = 0;
    }
    
    ///////////////////////// YOUR CODE ENDS HERE //////////////////////////////blished;
    
    

    publish( htmlElement ) {

        // Use createElement to create a div and assign it to a constant variable called articleContainer
        const articleContainer = document.createElement('div');
        
        // Use classList to add articleContainer to the classes:
        // "card card-body"
        articleContainer.classList.add("card", "card-body");

        // Use createElement to create an image and assign it to a constant variable called articleImage
        const articleImage = document.createElement('img');
        
        // Use classList to add image to the classes:
        // "rounded"  
        articleImage.classList.add("rounded");
        
        // use the src property to set the image Background to `${this.backgroundImage}`
        articleImage.src = `${this.backgroundImage}`;
        
        // Use createElement to create an div and assign it to a constant variable called articleSection
        // Assign it to the class:
        // "mt-4"
        const articleSection = document.createElement('div');
        articleSection.classList.add("mt-4");

        // Use createElement to create an link tag and assign it to a constant variable called articleCategory
        // Assign it to the class:
        // "badge", "bg-danger" "bg-opacity-10", "text-danger" "mb-2", "fw-bold"
        // Use innerHTML to assign it the value :
        // `${this.category}`

        const articleCategory = document.createElement('h1');
        articleCategory.classList.add("badge", "bg-danger", "bg-opacity-10", "text-white", "mb-2", "fw-bold");
        articleCategory.innerHTML = `${this.categories}`;

        // Use createElement to create an h1 tag and assign it to a constant variable called articleTitle
        // Assign it to the class:
        // "mb-2", "h2"
        // Use innerHTML to assign it the value :
        // `${this.title}`

        const articleTitle = document.createElement('h1');
        articleTitle.classList.add("mb-2", "h2");
        articleTitle.innerHTML = `${this.title}`;
        
        
        // Use createElement to create ul tag and assign it to a constant variable called articleInfo
        // Assign it to the class:
        // "nav", "nav-stack", "gap-3", "align-items-center"

        const articleInfo = document.createElement('ul');
        articleInfo.classList.add("nav","d-flex", "justify-content-between", "nav-stack", "gap-3", "align-items-center");
        
        // Use createElement to create an li tag and assign it to a constant variable called articleAuthor
        // Assign it to the class:
        // "nav-item"
        // Use innerHTML to assign it the value :
        // `${this.author}`
        
        const articleAuthor = document.createElement('li');
        articleAuthor.classList.add("nav-item");
        articleAuthor.innerHTML = `${this.author}`;

        // Use createElement to create an li tag and assign it to a constant variable called articleDate
        // Assign it to the class:
        // "nav-item"
        // Use innerHTML to assign it the value :
        // `${this.datePublished}`
        const articleDate = document.createElement("li");
        articleDate.classList.add("nav-item");
        articleDate.innerHTML = `${this.datePublished}`;
        
        // Use createElement to create an p tag and assign it to a constant variable called articleIntro
        // Assign it to the class:
        // "mt-4"
        // Use innerHTML to assign it the value :
        // `${this.intro}`
        const articleIntro = document.createElement('p');
        articleIntro.classList.add("mt-4");
        articleIntro.innerHTML = `${this.intro}`;

        
        // Use createElement to create an div tag and assign it to a constant variable called articleBodySection
        // Assign it to the class:
        // "row mb-4"
        
        const articleBodySection = document.createElement('div');
        articleBodySection.classList.add("row", "mb-4");
        
        // Use createElement to create an p tag and assign it to a constant variable called articleBody
        // Assign it to the class:
        // "mb-4"
        // Use innerHTML to assign it the value :
        // 

        const articleBody = document.createElement('div');
        for (let i=0; i < this.body.length; i++){
            let articleBodyContent = document.createElement('p');
            articleBodyContent.classList.add("mb-4", "p-3");
            articleBodyContent.innerHTML = `${this.body[i]}`;
            articleBody.appendChild(articleBodyContent);
        }

        
        // Use createElement to create an div tag and assign it to a constant variable called articleConclusionSection
        // Assign it to the class:
        // "col-md-6"

        const articleConclusionSection = document.createElement('div');
        articleConclusionSection.classList.add("col-md-6");
        
        // Use createElement to create an blockquote tag and assign it to a constant variable called articleConclusion
        // Assign it to the class:
        // "mb-4"
        // Use innerHTML to assign it the value :
        // `${this.conclusion}`
        const articleConclusion = document.createElement('blockquote');
        articleConclusion.classList.add("mt-4");
        articleConclusion.innerHTML = `${this.conclusion}`;
        articleContainer.appendChild(articleImage)

        articleSection.appendChild(articleTitle)
        articleSection.appendChild(articleCategory);
        articleSection.appendChild(articleInfo)

        // Append the article Body section and articleConclusion section into articleSection
        articleSection.appendChild(articleBodySection)
        articleSection.appendChild(articleConclusionSection)

        articleInfo.appendChild(articleAuthor)
        articleInfo.appendChild(articleDate)
        
        articleBodySection.appendChild(articleBody)
        articleConclusionSection.appendChild(articleConclusion)
        
        // Append the cardContainer into htmlElement
        htmlElement.appendChild(articleContainer)
        articleContainer.appendChild(articleSection)
        
        this.isPublished = true;
    }

    edit() {
        // edit article
    }

    unpublish() {
        this.isPublished = false;
    }

    like() {
        this.likes++;
    }

    dislike() {
        this.dislikes++;
    }

    addComment() {
        // add comment
    }

    removeComment() {
        // remove comment
    }

    editComment() {
        // edit comment
    }
}

/**
 * TODO:
 * 
 * Create a class called Comment - This class will represent a comment on an article.
 * 
 * The class should have the following properties:
 * > author - The author of the comment
 * > email - The email of the author of the comment
 * > datePublished - The date the comment was published
 * > body - The main body of the comment
 * > replies - An array of replies to the comment
 * > likes - The number of likes the comment has received
 * > dislikes - The number of dislikes the comment has received
 * 
 * 
 * The class should have the following methods:
 * > like() - This method should increment the likes property by 1
 * > dislike() - This method should increment the dislikes property by 1
 * > reply() - This method should allow the user to reply to the comment
 * > post() - This method should allow the user to post the comment
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
 */
class Comment {
    /**
     * > Create the constructor method and add the following parameters to the constructor:
     * 
     * @param { string } author 
     * @param { string } email 
     * @param { Date } datePublished 
     * @param { string } body 
     * @param { array } replies 
     * @param { number } likes 
     * @param { number } dislikes
     */
    ///////////////////////// YOUR CODE STARTS HERE  (Feel free to add more lines to below this comment)//////////////////////////////

    constructor( author, email, datePublished, body ) {
        this.author = author;
        this.email = email;
        this.datePublished = datePublished;
        this.body = body;

        this.replies = [ ];
        this.likes = 0;
        this.dislikes = 0;
    }

    ///////////////////////// YOUR CODE ENDS HERE //////////////////////////////

    like() {
        this.likes++;
    }

    dislike() {
        this.dislikes++;
    }

    reply( comment ) {
        // reply to comment
    }

    /**
     * TODO:
     * 
     * > Create a method called post() that takes a parameter called containerElement and will post the comment 
     *      to the article.html document (create the article.html document if it doesn't exist)
     * 
     * @param { HTMLElement } containerElement 
     */
    post( containerElement ) {
        /**
         * TODO:
         * 
         * > Use createElement() to create a div element and assign it to a constant variable called commentElement
         * > Use classList.add() to add the following classes to the commentElement:
         *     "mt-4", "d-flex", "ps-2", "ps-md-3"
         * 
         * > Use createElement() to create an img element and assign it to a constant variable called authorAvatarElement
         * > Use classList.add() to add the following classes to the authorAvatarElement:
         *    "avatar", "avatar-md", "rounded-circle", "float-start", "me-3"
         * > Use the src property to set the src attribute of the authorAvatarElement to the following URL:
         *   `https://ui-avatars.com/api/?name=${this.author}&size=64&background=random&rounded=true`
         * 
         * > Use createElement() to create a div element and assign it to a constant variable called commentDisplay
         * 
         * > Use createElement() to create a div element and assign it to a constant variable called commentBodyElement
         * > Use classList.add() to add the following classes to the commentBodyElement:
         *   "mb-2", "d-sm-flex"
         * 
         * > Use createElement() to create a div element and assign it to a constant variable called commentAuthorElement
         * > Use classList.add() to add the following classes to the commentAuthorElement:
         *  'text-nowrap', 'me-2', 'm-0'
         * > Use innerHTML to set the innerHTML of the commentAuthorElement to the following:
         * `<strong>${this.author}</strong>`
         * 
         * > Use createElement() to create a div element and assign it to a constant variable called commentDateElement
         * > Use classList.add() to add the following classes to the commentDateElement:
         * 'text-muted', 'small', 'ms-auto', 'text-nowrap', 'me-3'
         * > Use innerHTML to set the innerHTML of the commentDateElement to the following:
         * `<em>${this.datePublished.toLocaleString()}</em>`
         * 
         * > Use createElement() to create a div element and assign it to a constant variable called commentBody
         * > Use classList.add() to add the following classes to the commentBody:
         * 'mt-2', 'mt-sm-0', 'ms-sm-3', 'text-justify'
         * > Use innerHTML to set the innerHTML of the commentBody to the following:
         * `${this.body}`
         * 
         * > Use createElement() to create a div element and assign it to a constant variable called commentActions
         * > Use classList.add() to add the following classes to the commentActions:
         * 'd-flex', 'align-items-center'
         * 
         * > Use createElement() to create a button element and assign it to a constant variable called likeButtonElement
         * > Use classList.add() to add the following classes to the likeButtonElement:
         * 'btn', 'btn-sm', 'btn-outline-primary', 'me-2'
         * > Use innerHTML to set the innerHTML of the likeButtonElement to the following:
         * `<i class="bi bi-hand-thumbs-up"></i> <span>${this.likes}</span>`
         * 
         * > Use createElement() to create a button element and assign it to a constant variable called dislikeButtonElement
         * > Use classList.add() to add the following classes to the dislikeButtonElement:
         * 'btn', 'btn-sm', 'btn-outline-danger', 'me-2'
         * > Use innerHTML to set the innerHTML of the dislikeButtonElement to the following:
         * `<i class="bi bi-hand-thumbs-down"></i> <span>${this.dislikes}</span>`
         * 
         * > Use createElement() to create a button element and assign it to a constant variable called replyButtonElement
         * > Use classList.add() to add the following classes to the replyButtonElement:
         * 'btn', 'btn-sm', 'btn-outline-success'
         * > Use innerHTML to set the innerHTML of the replyButtonElement to the following:
         * `<i class="bi bi-reply-fill"></i> Reply`
         * 
         * > Use appendChild() to append the following elements to the commentElement:
         *    - authorAvatarElement
         *   - commentDisplay
         * 
         * > Use appendChild() to append the following elements to the commentDisplay:
         *   - commentBodyElement
         *  - commentActions
         * 
         * > Use appendChild() to append the following elements to the commentBodyElement:
         *  - commentAuthorElement
         * - commentDateElement
         * - commentBody
         * 
         * > Use appendChild() to append the following elements to the commentActions:
         * - likeButtonElement
         * - dislikeButtonElement
         * - replyButtonElement
         * 
         * > Use appendChild() to append the commentElement to the containerElement
         * 
         * > Use addEventListener() to add a click event listener to the likeButtonElement that calls the like() method
         * 
         * > Use addEventListener() to add a click event listener to the dislikeButtonElement that calls the dislike() method
         * 
         * > Use addEventListener() to add a click event listener to the replyButtonElement that calls the reply() method
         */
        ///////////////////////// YOUR CODE STARTS HERE  (Feel free to add more lines to below this comment)//////////////////////////////

        const commentElement = document.createElement('div');
        commentElement.classList.add("mt-4", "d-flex", "ps-2", "ps-md-3");
        
        const authorAvatarElement = document.createElement('img')
        authorAvatarElement.setAttribute("src", `https://ui-avatars.com/api/?name=${this.author}&size=64&background=random&rounded=true`)
        authorAvatarElement.classList.add("avatar", "avatar-md", "rounded-circle", "float-start", "me-3");
        
        
        const commentDisplay = document.createElement('div');

        const commentBodyElement = document.createElement('div');
        commentBodyElement.classList.add( "mb-2", "d-sm-flex");

        const commentAuthorElement = document.createElement('div');
        commentAuthorElement.classList.add('text-nowrap', 'me-2', 'm-0');
        document.getElementById('commentAuthorElement').innerHTML = "`<strong>${this.author}</strong>`";

        const commentDateElement = document.createElement('div');
        commentDateElement.classList.add('text-muted', 'small', 'ms-auto', 'text-nowrap', 'me-3');
        
        const commentBody = document.createElement('div');
        commentBody.classList.add('mt-2', 'mt-sm-0', 'ms-sm-3', 'text-justify');
        document.getElementById('commentBody').innerHTML = "`${this.body}`";

        const commentActions = document.createElement('div');
        commentActions.classList.add('d-flex', 'align-items-center');

        const likeButtonElement = document.createElement('button');
        likeButtonElement.classList.add('btn', 'btn-sm', 'btn-outline-primary', 'me-2');
        document.getElementById('likeButtonElement').innerHTML = `<i class="bi bi-hand-thumbs-up"></i> <span>${this.likes}</span>`;

        const dislikeButtonElement = document.createElement('button');
        dislikeButtonElement.classList.add('btn', 'btn-sm', 'btn-outline-danger', 'me-2');
        document.getElementById('dislikeButtonElement').innerHTML = `<i class="bi bi-hand-thumbs-down"></i> <span>${this.dislikes}</span>`;

        const replyButtonElement = document.createElement('button');
        replyButtonElement.classList.add('btn', 'btn-sm', 'btn-outline-success');
        document.getElementById('replyButtonElement').innerHTML = `<i class="bi bi-reply-fill"></i> Reply`;

        commentElement.appendChild(authorAvatarElement);
        commentElement.appendChild(commentDisplay);
        commentDisplay.appendChild(commentBodyElement);
        commentDisplay.appendChild(commentActions);
        commentBodyElement.appendChild(commentAuthorElement);
        commentBodyElement.appendChild(commentDateElement);
        commentBodyElement.appendChild(commentBody)
        commentActions.appendChild(likeButtonElement);
        commentActions.appendChild(dislikeButtonElement);
        commentActions.appendChild(replyButtonElement);
        containerElement.appendChild(commentElement);


        ///////////////////////// YOUR CODE ENDS HERE //////////////////////////////
    }
}

// Create the window.onload functoion
window.onload = function () {
    /** 
     * > Create an article with the relevant fields as listed below
     * @param { string } title 
     * @param { string } intro 
     * @param { URL } backgroundImage 
     * @param { Date } datePublished 
     * @param { string } author 
     * @param { array } categories 
     * @param { string } body 
     * @param { string } conclusion 
     * 
     */
    
    const title = "My Visit to Bangkok";
    const intro = "I'm at Bangkok, I just arrived yesterday. Hope to see you here!!";
    const backgroundImage = "../static/bangkok.jpeg";
    const datePublished = "May 4th 2026";
    const author = "jaylia_travels";
    const categories = "travel, blog"
    const body = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet semper tincidunt. Morbi nec lacus tristique, suscipit dui sed, mattis quam. Cras ac libero ante. Suspendisse pellentesque magna leo, vitae dapibus lorem fermentum ultricies. Nunc ultricies ultricies efficitur. Sed velit risus, iaculis eu tempor nec, consequat pellentesque nibh. Proin turpis est, lacinia et tortor et, volutpat feugiat felis. Vivamus non lectus purus.",
        "Sed vel rutrum augue. Nullam congue neque vitae purus fermentum, ut laoreet lacus posuere. Sed scelerisque, augue quis tempus rutrum, purus nisl dictum libero, in congue leo magna ac justo. Proin eget urna vitae libero scelerisque semper. Etiam accumsan in neque vel suscipit. Nullam pretium mi et vulputate tristique. Proin sed purus facilisis, convallis lorem nec, porttitor lacus. Nulla fermentum in diam in congue. Maecenas congue velit neque, quis pulvinar turpis pretium sed. Praesent imperdiet mauris non odio rutrum, sit amet rhoncus erat pellentesque. Donec ut congue lorem, imperdiet luctus quam. Sed finibus odio nec fermentum efficitur. Aenean condimentum metus ut orci iaculis mattis. Proin maximus vehicula vehicula. Nulla a ultricies lectus.",
        "Morbi quis tortor blandit, dapibus ipsum vitae, volutpat elit. Maecenas laoreet mi erat. Proin eget hendrerit augue. Vestibulum id hendrerit felis. Phasellus congue luctus nulla. Proin felis risus, finibus eget ullamcorper sed, facilisis ut libero. Phasellus placerat diam at congue pellentesque. Fusce posuere ut purus eget cursus.",
        "Integer sed imperdiet lorem. Vivamus id fringilla est, id blandit nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper in orci sed semper. Cras in ante a urna ultricies porta quis eget enim. Aenean id accumsan est. Aenean gravida dapibus nisl ac vestibulum. Nam placerat diam et dolor ultrices ornare.",
        "In eget cursus mi. Morbi in lectus bibendum, egestas quam id, elementum neque. Sed eu convallis dui. Curabitur nibh elit, gravida a dui quis, porttitor mattis dolor. Duis et facilisis nunc. Vestibulum et metus odio. Vestibulum sem justo, sagittis nec luctus eu, maximus nec dolor. Integer ac odio vehicula, sodales est vitae, placerat sem. Nunc venenatis pretium sem sed condimentum. Aenean maximus felis orci, ac auctor metus gravida id. Suspendisse potenti."
    ]
    const conclusion = "I am leaving Bangkok and returning home! I had lots of fun meeting you guys! Bye Bangkok!!";

    // Create and publish the article on Bangkok
    var bangkok = new Article(
        title,
        intro,
        backgroundImage,
        datePublished,
        author,
        categories,
        body,
        conclusion
    );
    

    const article_section = document.getElementById("article_section");
    bangkok.publish(article_section);
}