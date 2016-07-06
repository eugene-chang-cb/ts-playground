
import {TestController} from "./controllers/TestController";
import {ExpressFactory} from "./core/ExpressFactory";

var controller = new TestController();
controller.registerRoutes();

ExpressFactory.start();