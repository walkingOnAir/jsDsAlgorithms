/**
 * webpack entry js
 * Created by wangpeng on 2017/7/26.
 */
import Error from "./error";

class Test {
    
    toString() {
        return "this is a test class";
    }
}

console.log(new Test().toString());

const error = new Error();
error.printError();
