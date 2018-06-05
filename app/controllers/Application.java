package controllers;

import play.*;
import play.mvc.*;

//import views folder
import views.html.*;

public class Application extends Controller {
    //return index
    public Result index() {
        return ok(index.render());
    }

    //return statistics
    public Result statistics(int wins, int losses){
        return ok(views.html.Stats.render(wins, losses));
    }

}
