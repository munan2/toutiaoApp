class Scroll {
    constructor () {

    }
    scrollEvent () {
        window.onscroll = function () {
            var body = document.body;
            console.log(body)
        }
    }
}
export default Scroll