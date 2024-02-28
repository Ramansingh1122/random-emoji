const emoji = ["😀","😃","😄","😁","😆","😅","🤣","😂","🙂","🙃","😉","😊","😇","🥰","😍","🤩","😘","😚","😙","❤️","🧡","💚","💙","💜","🖤","🤍","💥","💫","💦","💨","🕳️","💣","💬","👁️‍🗨️","🗨️","🗯️","💭","💤"]

const generateBtn = document.getElementById('btn');
document.getElementById("emoji-container").textContent = emoji[0];
generateBtn.addEventListener('click', function () {
    let output = emoji[Math.floor(Math.random() * emoji.length)];
    document.getElementById("emoji-container").textContent = output;
})