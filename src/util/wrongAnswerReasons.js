<<<<<<< HEAD
import { Enumify } from "./enumify";
=======
const { Enumify } = require("./enumify");
>>>>>>> 56e51aacdc4c4a08f3010436c8544fddb43d5446

class WrongAnswerReasons extends Enumify {
    static wrong = new WrongAnswerReasons();
    static sameAsProblem = new WrongAnswerReasons();

    static errored = new WrongAnswerReasons();

    static _ = this.closeEnum();
}

export default WrongAnswerReasons
