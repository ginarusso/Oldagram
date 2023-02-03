const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        avatarDescr: "image of Vincent Van Gogh",
        post: "images/post-vangogh.jpg",
        postDescr: "image of Vincent VanGogh",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        avatarDescr: "image of Gustave Courbet",
        post: "images/post-courbet.jpg",
        postDescr: "image of Gustave Courbet",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        avatarDescr: "image of Joseph Ducreux",
        post: "images/post-ducreux.jpg",
        postDescr: "image of Joseph Ducreux",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const avatar = document.getElementById('avatar')
const name = document.getElementById('name')
const locationEl = document.getElementById('location')
const portrait = document.getElementById('portrait')
const heart = document.getElementById('heartIcon')
const likes = document.getElementById('likes')
const username = document.getElementById('username')
const comment = document.getElementById('comment')

const randomNum = Math.floor(Math.random() * posts.length)

function getRandomPost() {
    avatar.src = `${posts[randomNum].avatar}`
        // avatar.innerHTML = `${posts[randomNum].avatar}" alt=${posts[randomNum].avatarDescr}"`
    // console.log(avatar.innerHTML = `${posts[randomNum].avatar}alt=${posts[randomNum].avatarDescr}`)
    name.textContent = `${posts[randomNum].name}`
    locationEl.textContent = `${posts[randomNum].location}`
    portrait.src = `${posts[randomNum].post}`
    likes.textContent = `${posts[randomNum].likes} likes`
    username.textContent = `${posts[randomNum].username}`
    comment.textContent = `${posts[randomNum].comment}`
}

heart.addEventListener("click", function (e) {
   let newLikes
   heart.classList.toggle("liked")
   if (heartIcon.classList.contains("liked")) {
       newLikes = posts[randomNum].likes + 1
       heart.src="images/icon-heart-red.png"
   } else {
       newLikes = posts[randomNum].likes
       heart.src="images/icon-heart.png"
   }
   likes.textContent = `${newLikes} likes`
})
getRandomPost()


// const allPosts = posts.map(post => {
//     // console.log(post.avatar)
// avatar.src = `${post.avatar}`
// name.textContent = `${post.name}`
// locationEl.textContent = `${post.location}`
// portrait.src = `${post.post}`
// likes.textContent = `${post.likes} likes`
// username.textContent = `${post.username}`
// comment.textContent = `${post.comment}`
// })

// check for clicks on icon
// change state of button to show liked
// increment like count by 1 and display on screen
// if image is liked
//  remove state of button
//  return the like count to initial state
//  display original like count on screen
// convert images into buttons with a bg image
// use forEach to display every post in the posts array



// avatar.innerHTML = `${post[0].avatar}`
// avatarEl.src = `images/avatar-vangogh.jpg`

// console.log(posts[0].avatar)
