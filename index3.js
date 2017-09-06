module.exports = clozeCard;

function clozeCard(full, cloze){
    this.full = full;
    this.answer = cloze;
    this.question = full.replace(cloze, "...");

    if(this.full===this.partial){
        this.full = "sorry wrong answer!"
        this.cloze = "sorry wrong answer!"
        this.partial = "sorry wrong answer!"
    }
}
